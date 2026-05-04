'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { Maximize2, Minimize2 } from 'lucide-react'
import Text from '@/components/shared/text/Text'

const OPENWEATHER_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_WEATHER_API_KEY || ''

const WEATHER_CACHE_PREFIX = 'artmed-weather:v2:'

const CLINIC_ADDRESS = 'Carrer Pineda del Mar 27A, Platja d’Aro, Spain'
const CLINIC_CITY = 'Platja d’Aro'

const CLINIC_GEO = {
  lat: 41.81647,
  lng: 3.06738,
}

function isWeatherDataValid(time) {
  if (!time) return false
  return Date.now() - new Date(time).getTime() < 60 * 60 * 1000
}

function readWeatherFromStorage(id) {
  try {
    const raw = localStorage.getItem(`${WEATHER_CACHE_PREFIX}${id}`)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function writeWeatherToStorage(id, data) {
  try {
    localStorage.setItem(`${WEATHER_CACHE_PREFIX}${id}`, JSON.stringify(data))
  } catch {}
}

export default function ClinicMap({
  id = 'artmed-clinic',
  address = CLINIC_ADDRESS,
  city = CLINIC_CITY,
  geo = CLINIC_GEO,
  className = '',
}) {
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [isMapLoaded, setIsMapLoaded] = useState(false)
  const [weatherData, setWeatherData] = useState(null)

  const mapSrc = useMemo(() => {
    const query = encodeURIComponent(address)
    return `https://maps.google.com/maps?q=${query}&z=16&output=embed&t=m`
  }, [address])

  useEffect(() => {
    if (isMapLoaded) return

    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsMapLoaded(true)
        window.removeEventListener('scroll', handleScroll)
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMapLoaded])

  useEffect(() => {
    const savedWeather = readWeatherFromStorage(id)

    if (savedWeather && isWeatherDataValid(savedWeather.time)) {
      setWeatherData(savedWeather)
      return
    }

    async function fetchWeather() {
      if (!OPENWEATHER_API_KEY) return

      try {
        const params = new URLSearchParams({
          lat: String(geo.lat),
          lon: String(geo.lng),
          units: 'metric',
          lang: 'ru',
          appid: OPENWEATHER_API_KEY,
        })

        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?${params.toString()}`,
        )

        const data = await res.json()

        if (!res.ok || Number(data?.cod) !== 200) return

        const weather = data?.weather?.[0]

        const nextWeatherData = {
          id,
          time: new Date().toISOString(),
          temperature: data?.main?.temp ?? 0,
          icon: weather?.icon
            ? `https://openweathermap.org/img/wn/${weather.icon}@2x.png`
            : '',
          city,
          description: weather?.description || '',
        }

        setWeatherData(nextWeatherData)
        writeWeatherToStorage(id, nextWeatherData)
      } catch (error) {
        console.error('Weather fetch error:', error)
      }
    }

    fetchWeather()
  }, [id, city, geo.lat, geo.lng])

  useEffect(() => {
    if (!isFullScreen) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsFullScreen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isFullScreen])

  const mapContent = (
    <>
      {isMapLoaded ? (
        <iframe
          title="ARTMED Clinic Google Maps"
          src={mapSrc}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0 bg-background-soft" />
      )}

      <button
        type="button"
        onClick={() => {
          setIsMapLoaded(true)
          setIsFullScreen((prev) => !prev)
        }}
        aria-label={
          isFullScreen
            ? 'Закрыть карту на весь экран'
            : 'Открыть карту на весь экран'
        }
        className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-background-border bg-white/92 text-primary shadow-[0_10px_28px_rgba(16,36,50,0.12)] backdrop-blur transition hover:bg-secondary-soft"
      >
        {isFullScreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
      </button>

      {weatherData?.icon ? (
        <div className="absolute bottom-2 left-2 z-10 flex w-[170px] flex-col items-center border border-background-border bg-white/95 px-2 py-2 shadow-[0_8px_22px_rgba(16,36,50,0.12)]">
          <Text
            as="p"
            variant="caption"
            color="brand"
            className="text-[14px] font-bold leading-4"
          >
            Погода в {weatherData.city}
          </Text>

          <div className="my-[-8px] flex items-center">
            <Image
              src={weatherData.icon}
              alt="Weather icon"
              width={42}
              height={42}
              className="h-[42px] w-[42px] shrink-0 object-contain opacity-90"
              unoptimized
            />

            <Text
              as="p"
              variant="body"
              color="default"
              translate={true}
              className="text-[24px] leading-none tracking-[-0.02em]"
            >
              {Math.round(weatherData.temperature)}°C
            </Text>
          </div>

          {weatherData.description ? (
            <Text
              as="p"
              variant="caption"
              caseMode="sentence"
              className="text-center text-[13px] font-thin leading-4"
            >
              {weatherData.description}
            </Text>
          ) : null}
        </div>
      ) : null}
    </>
  )

  return (
    <>
      <div
        id="map"
        className={`relative h-[360px] w-full overflow-hidden rounded-[28px] border border-background-border bg-background-soft shadow-card md:h-[430px] ${className}`}
      >
        {mapContent}
      </div>

      {isFullScreen ? (
        <div className="fixed inset-0 z-[20000] bg-white">
          <div className="relative h-full w-full">{mapContent}</div>
        </div>
      ) : null}
    </>
  )
}

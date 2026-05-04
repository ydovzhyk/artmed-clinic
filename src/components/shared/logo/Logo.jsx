'use client'

import Image from 'next/image'
import clsx from 'clsx'

export default function Logo({
  height = 56,
  className,
  imageClassName,
  priority = true,
}) {
  const handleClick = (e) => {
    e.preventDefault()

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <a
      href="#top"
      onClick={handleClick}
      aria-label="Перейти наверх"
      className={clsx('group inline-flex items-center', className)}
    >
      <Image
        src="/images/logo.png"
        alt="Логотип клиники"
        width={256}
        height={89}
        priority={priority}
        className={clsx(
          'w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]',
          imageClassName,
        )}
        style={{ height: `${height}px` }}
      />
    </a>
  )
}
// 'use client'

// import Image from 'next/image'
// import clsx from 'clsx'

// export default function Logo({
//   height = 48,
//   className,
//   imageClassName,
//   priority = true,
// }) {
//   const handleClick = (e) => {
//     e.preventDefault()

//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     })
//   }

//   return (
//     <a
//       href="#top"
//       onClick={handleClick}
//       aria-label="Перейти наверх"
//       className={clsx('group inline-flex items-center', className)}
//     >
//       <Image
//         src="/images/logo.png"
//         alt="Логотип клиники"
//         width={240}
//         height={120}
//         priority={priority}
//         className={clsx(
//           'h-auto w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]',
//           imageClassName,
//         )}
//         style={{ height }}
//       />
//     </a>
//   )
// }

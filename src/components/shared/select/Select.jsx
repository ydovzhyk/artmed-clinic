'use client'

import clsx from 'clsx'
import ReactSelect, { components as defaultComponents } from 'react-select'
import { useMemo, useState } from 'react'

function DropdownIndicator(props) {
  const { selectProps } = props
  const isOpen = selectProps.menuIsOpen

  return (
    <defaultComponents.DropdownIndicator {...props}>
      <span
        aria-hidden="true"
        className={clsx(
          'block h-[8px] w-[8px] shrink-0 border-r-2 border-b-2 border-foreground-faint transition-transform duration-200 ease-out',
          isOpen
            ? '-translate-y-[1px] rotate-[225deg]'
            : 'translate-y-[-1px] rotate-45',
        )}
      />
    </defaultComponents.DropdownIndicator>
  )
}

export default function Select({
  id,
  label,
  error,
  hint,
  className,
  labelClassName,
  helpClassName,
  options = [],
  value = null,
  onChange,
  placeholder = 'Select option',
  isSearchable = false,
  isClearable = false,
  isDisabled = false,
  required = false,
  menuPlacement = 'bottom',
  hideHelp = false,

  classNamePrefix = 'clinic-select',
  components,
  formatOptionLabel,
  getOptionLabel,
  getOptionValue,
  noOptionsMessage,
}) {
  const [isFocused, setIsFocused] = useState(false)
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const describedById = id ? `${id}__help` : undefined
  const isActive = isFocused || menuIsOpen
  const showErrorState = Boolean(error) && !isActive

  const mergedComponents = useMemo(
    () => ({
      DropdownIndicator,
      IndicatorSeparator: null,
      ...(components || {}),
    }),
    [components],
  )

  const styles = useMemo(
    () => ({
      menuPortal: (base) => ({
        ...base,
        zIndex: 20000,
      }),

      control: (base) => ({
        ...base,
        minHeight: '40px',
        height: '40px',
        borderRadius: '999px',
        background: 'rgba(255, 255, 255, 0.92)',
        border: isActive
          ? '1px solid rgba(22, 182, 217, 0.72)'
          : showErrorState
            ? '1px solid rgba(239, 68, 68, 0.6)'
            : '1px solid rgba(207, 232, 242, 1)',
        boxShadow: isActive
          ? '0 0 0 4px rgba(22, 182, 217, 0.14)'
          : showErrorState
            ? '0 0 0 4px rgba(239, 68, 68, 0.1)'
            : '0 8px 24px rgba(16, 36, 50, 0.04)',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.6 : 1,
        transition: 'all 0.2s ease',
        '&:hover': {
          borderColor: isActive
            ? 'rgba(22, 182, 217, 0.72)'
            : showErrorState
              ? 'rgba(239, 68, 68, 0.6)'
              : 'rgba(0, 119, 168, 0.28)',
          boxShadow: isActive
            ? '0 0 0 4px rgba(22, 182, 217, 0.14)'
            : '0 10px 26px rgba(0, 119, 168, 0.08)',
        },
      }),

      valueContainer: (base) => ({
        ...base,
        height: '40px',
        padding: '0 0.875rem',
      }),

      placeholder: (base) => ({
        ...base,
        color: 'var(--text-faint)',
        fontSize: '0.9rem',
      }),

      singleValue: (base) => ({
        ...base,
        color: 'var(--text)',
        fontSize: '0.95rem',
        fontWeight: 700,
      }),

      input: (base) => ({
        ...base,
        color: 'var(--text)',
        margin: 0,
        padding: 0,
      }),

      indicatorsContainer: (base) => ({
        ...base,
        height: '40px',
      }),

      indicatorSeparator: () => ({
        display: 'none',
      }),

      dropdownIndicator: (base) => ({
        ...base,
        color: 'var(--text-faint)',
        paddingLeft: '0.35rem',
        paddingRight: '0.875rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          color: 'var(--primary)',
        },
      }),

      clearIndicator: (base) => ({
        ...base,
        color: 'var(--text-faint)',
        '&:hover': {
          color: 'var(--primary)',
        },
      }),

      menu: (base) => ({
        ...base,
        marginTop: 8,
        overflow: 'hidden',
        borderRadius: '1rem',
        border: '1px solid rgba(207, 232, 242, 1)',
        background:
          'linear-gradient(180deg, rgba(255,255,255,0.98), rgba(247,251,253,0.98))',
        boxShadow:
          '0 18px 42px rgba(16,36,50,0.12), 0 0 0 1px rgba(22,182,217,0.08)',
        backdropFilter: 'blur(12px)',
      }),

      menuList: (base) => ({
        ...base,
        padding: '0.5rem',
        maxHeight: 280,
      }),

      option: (base, state) => ({
        ...base,
        borderRadius: '0.875rem',
        padding: '0.7rem 0.875rem',
        fontSize: '0.95rem',
        fontWeight: state.isSelected ? 700 : 600,
        cursor: 'pointer',
        color: state.isSelected ? 'var(--primary)' : 'var(--text-soft)',
        background: state.isSelected
          ? 'rgba(226, 248, 253, 0.95)'
          : state.isFocused
            ? 'rgba(0, 119, 168, 0.07)'
            : 'transparent',
        transition: 'all 0.16s ease',
        ':active': {
          background: 'rgba(22, 182, 217, 0.14)',
        },
      }),

      noOptionsMessage: (base) => ({
        ...base,
        color: 'var(--text-faint)',
        fontSize: '0.875rem',
      }),
    }),
    [showErrorState, isActive, isDisabled],
  )

  return (
    <div className={clsx('input-group', className)}>
      {label ? (
        <label
          htmlFor={id}
          className={clsx(
            'mb-2 block text-sm font-semibold text-foreground-soft',
            labelClassName,
          )}
        >
          {label}
          {required ? <span className="ml-1 text-danger">*</span> : null}
        </label>
      ) : null}

      <ReactSelect
        instanceId={id}
        inputId={id}
        options={options}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isSearchable={isSearchable}
        isClearable={isClearable}
        isDisabled={isDisabled}
        aria-invalid={Boolean(error)}
        aria-describedby={describedById}
        menuPortalTarget={
          typeof document !== 'undefined' ? document.body : null
        }
        menuPosition="fixed"
        menuPlacement={menuPlacement}
        unstyled
        classNamePrefix={classNamePrefix}
        components={mergedComponents}
        styles={styles}
        formatOptionLabel={formatOptionLabel}
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
        noOptionsMessage={noOptionsMessage}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onMenuOpen={() => setMenuIsOpen(true)}
        onMenuClose={() => setMenuIsOpen(false)}
      />

      {!hideHelp && (
        <span
          id={describedById}
          className={clsx(
            'mt-2 block min-h-5 text-xs leading-5 text-foreground-faint',
            error && 'text-danger',
            helpClassName,
          )}
        >
          {error || hint || '\u00A0'}
        </span>
      )}
    </div>
  )
}

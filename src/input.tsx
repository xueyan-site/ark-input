import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import cn from 'classnames'
import { CloseIcon } from 'xueyan-react-icon'
import styles from './input.scss'

export interface InputProps<T> {
  /** 类名 */
  className?: string
  /** 样式 */
  style?: React.CSSProperties
  /** 输入框提示 */
  placeholder?: string
  /** 已选值 */
  value?: T
  /** 改变已选值 */
  onChange?: (value?: T) => void
  /** 允许清除 */
  allowClear?: boolean
  /** 禁止修改 */
  disabled?: boolean
}

export interface InputRef {
  rootNode: HTMLDivElement | null
  inputNode: HTMLInputElement | null
  focus?: HTMLOrSVGElement['focus']
  blur?: HTMLOrSVGElement['blur']
}

export const Input = forwardRef<InputRef, InputProps<any>>(({
  className,
  style,
  placeholder,
  value,
  onChange,
  allowClear,
  disabled
}, ref) => {
  const rootRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [active, setActive] = useState<boolean>(false)

  useImperativeHandle(ref, () => {
    return { 
      rootNode: rootRef.current,
      inputNode: inputRef.current,
      blur: inputRef.current?.blur,
      focus: inputRef.current?.focus,
    }
  }, [rootRef.current, inputRef.current])

  return (
    <div
      ref={rootRef}
      style={style}
      className={cn(styles.xrinput, className, {
        [styles.active]: active,
        [styles.disabled]: disabled,
        [styles.allowclear]: allowClear && !disabled
      })}
    >
      <input 
        ref={inputRef}
        className={cn(styles.block, styles.label)}
        value={value}
        placeholder={placeholder || '请输入'}
        disabled={disabled}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        onChange={(event) => {
          if (onChange) {
            onChange(event.target.value)
          }
        }}
      />
      {allowClear && value && !disabled && (
        <div 
          className={cn(styles.block, styles.icon, styles.clear)}
          onClick={() => {
            if (onChange) {
              onChange('')
              inputRef.current?.blur()
            }
          }}
        >
          <CloseIcon />
        </div>
      )}
    </div>
  )
})

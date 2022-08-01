import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import cn from 'classnames'
import { CloseIcon } from 'sicon'
import styles from './input.scss'

export type InputOnChange<T> = (
  value: T,
  event: React.ChangeEvent<HTMLInputElement>
) => void

export type InputOnClear = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) => void

export interface InputProps<T> {
  /** 类名 */
  className?: string
  /** 样式 */
  style?: React.CSSProperties
  /** 已选值 */
  value?: T
  /** 禁止修改 */
  disabled?: boolean
  /** 输入框提示 */
  placeholder?: string
  /** 改变已选值 */
  onChange?: InputOnChange<T>
  /** 清除 */
  onClear?: InputOnClear
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
  value,
  placeholder,
  disabled,
  onChange,
  onClear
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
        [styles.allowclear]: !disabled && value && onClear
      })}
    >
      <input 
        ref={inputRef}
        className={cn(styles.block, styles.input)}
        placeholder={placeholder || '请输入'}
        disabled={disabled}
        value={value || ''}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        onChange={(event) => {
          if (onChange) {
            onChange(event.target.value, event)
          }
        }}
      />
      {!disabled && value && onClear && (
        <div 
          className={cn(styles.block, styles.icon, styles.clear)}
          onClick={event => {
            inputRef.current?.blur()
            event.stopPropagation()
            onClear(event)
          }}
        >
          <CloseIcon />
        </div>
      )}
    </div>
  )
})

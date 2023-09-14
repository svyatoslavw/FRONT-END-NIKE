'use client'
import clsx from 'clsx'
import { forwardRef, useState } from 'react'
import { ITextArea } from './text-area.interface'

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
  ({ error, className, style, ...rest }, ref) => {
    const [text, setText] = useState('')

    const maxLength = 150
    const handleChange = (e: any) => setText(e.target.value.length <= 150 ? e.target.value : text)
    return (
      <div className={className} style={style}>
        <label>
          <textarea
            ref={ref}
            {...rest}
            maxLength={maxLength}
            aria-invalid="false"
            value={text}
            onChange={handleChange}
            className={clsx(
              'px-4 resize-none py-4 h-28 text-base outline-none rounded-xl border-black w-full border-solid border transition focus:border-secondery',
              { 'border-primary': !!error },
            )}
          />
          <span className="justify-end flex text-sm text-gray-500">
            {text.length}/{maxLength}
          </span>
        </label>
        {error && <div className="text-primary">{error}</div>}
      </div>
    )
  },
)

TextArea.displayName = 'TextArea'

export default TextArea

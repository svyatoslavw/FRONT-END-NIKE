import { useDebounce } from '@/hooks/useDebounce'
import { FC, useEffect, useState } from 'react'

interface IRange {
  min?: number
  max?: number
  fromInitialValue?: string
  toInitialValue?: string
  onChangeFromValue: (value: string) => void
  onChangeToValue: (value: string) => void
}

const Range: FC<IRange> = ({
  min = 0,
  max,
  fromInitialValue,
  toInitialValue,
  onChangeFromValue,
  onChangeToValue,
}) => {
  const [fromValue, setFromValue] = useState(fromInitialValue || '')
  const [toValue, setToValue] = useState(toInitialValue || '')

  const debounceFromValue = useDebounce(fromValue, 500)
  const debounceToValue = useDebounce(toValue, 500)

  useEffect(() => {
    onChangeFromValue(debounceFromValue)
  }, [debounceFromValue])

  useEffect(() => {
    onChangeToValue(debounceToValue)
  }, [debounceToValue])

  return (
    <div>
      <input
        min={min}
        max={max}
        placeholder="To"
        type="number"
        value={fromValue}
        onChange={(e) => setFromValue(e.target.value)}
        className="w-1/2 bg-secondary p-1 appearance-none outline-none"
      />
      {' - '}
      <input
        min={min}
        max={max}
        placeholder="From"
        type="number"
        value={toValue}
        onChange={(e) => setToValue(e.target.value)}
        className="w-1/2 bg-secondary p-1 appearance-none outline-none"
      />
    </div>
  )
}

export default Range

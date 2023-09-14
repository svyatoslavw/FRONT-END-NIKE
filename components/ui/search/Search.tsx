import { useActions } from '@/hooks/useActions'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'

import { ImCross, ImSearch } from 'react-icons/im'
import { useDispatch } from 'react-redux'

const Search: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const { push } = useRouter()
  const { resetFilterUpdate, updateQueryParam } = useActions()

  const dispatch = useDispatch()

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      resetFilterUpdate()
    } else {
      push(`/?page=1`)
      updateQueryParam({ key: 'searchTerm', value: searchTerm })
    }
  }

  const handleClear = () => {
    setSearchTerm('')
    updateQueryParam({ key: 'searchTerm', value: '' })
    resetFilterUpdate()
  }

  return (
    <div>
      <div
        className="grid w-full rounded-3xl overflow-hidden"
        style={{ gridTemplateColumns: '0.3fr 1fr 0.1fr' }}
      >
        <button
          onClick={handleSearch}
          className={
            'bg-secondary hover:bg-gray-200 border-none cursor-pointer transition-colors duration-300 text-white flex items-center justify-center p-2.5'
          }
        >
          <span>
            <ImSearch size={16} className="font-bold text-black" />
          </span>
        </button>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-[#F5F5F5]  w-32 py-2 border-none text-base px-4 text-black outline-none"
          placeholder="Search..."
          onKeyDown={(e) => (e.key === 'Enter' ? handleSearch() : null)}
        />

        <button
          onClick={handleClear}
          className="bg-secondary border-none cursor-pointer text-white hover:bg-red-600 hover:bg-opacity-40 transition-colors duration-300 hover:text-white flex  items-center justify-center p-2.5" // Стили для кнопки сброса
        >
          <span>
            <ImCross size={12} className="font-bold opacity-40 text-black" />
          </span>
        </button>
      </div>
    </div>
  )
}

export default Search

import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../state/hooks'
import { updateSearchTerm } from '../state/searchTermSlice'

export const SearchTool: React.FC = () => {
  const searchTerm = useAppSelector((state) => state.searchTerm)
  const [tempSearchTerm, setTempSearchTerm] = useState<string>(searchTerm)

  const dispatch = useAppDispatch()

  const doUpdateSearchTerm = (term: string) => {
    dispatch(updateSearchTerm(term))
  }

  return (
    <div>
      <input
        type="text"
        className={`block w-full py-2 pb-1.5 px-4 bg-white text-theme-darkGray border border-theme-darkGray text-lg rounded-md`}
        placeholder="Search"
        value={tempSearchTerm}
        onChange={(event) => {
          setTempSearchTerm(event.target.value)
          if (typeof event.target.value !== 'undefined') {
            doUpdateSearchTerm(event.target.value)
          }
        }}
      />
    </div>
  )
}

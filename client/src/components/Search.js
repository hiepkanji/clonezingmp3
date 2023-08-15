import React from 'react'
import icons from '../ultis/icons'

const { FiSearch } = icons

const Search = () => {
    return (
        <div className='w-full flex items-center '>
            <span className='h-10 pl-4 flex bg-[#dde4e4] items-center justify-center rounded-l-[20px] text-gray-500'>
                <FiSearch size={20} />
            </span>
            <input
                type="text"
                className='outline-none bg-[#dde4e4] px-4 rounded-r-[20px] h-10 text-gray-500 w-full'
                placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'
            />
        </div>
    )
}

export default Search
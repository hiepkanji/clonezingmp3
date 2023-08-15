import React from 'react'
import { Outlet } from 'react-router-dom'
import { Player, SidebarLeft, SidebarRight } from '../../components'

const Public = () => {
    return (
        <div className='w-full min-h-screen flex flex-col bg-[#ced9d9]'>
            <div className=' w-full h-full flex flex-auto'>
                <div className='w-[240px] min-h-screen flex-none border'>
                    <SidebarLeft />
                </div>
                <div className='flex-auto border'>
                    <Outlet />
                </div>
                <div className='w-[329px] hidden 1600:flex flex-none border animate-slide-left'>
                    <SidebarRight />
                </div>
            </div>
            <div className='fixed bottom-0 left-0 right-0 h-[90px]'>
                <Player />
            </div>
        </div>
    )
}

export default Public
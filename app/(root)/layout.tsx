import Navbar from '@/components/navbar'
import React from 'react'

const layout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        
        <div className=''>
        <Navbar />
        {children}
        </div>
    )
}

export default layout
import React from 'react'
import { Button } from './ui/button'

interface Profile {
  closeProfile: ()=>void
}

const Profile = ({closeProfile}: Profile) => {
    
  return (
    <div className='h-50 w-50 bg-neutral-300 flex items-center justify-around flex-col rounded-l-lg rounded-b-lg'>
        <div>Profile</div>
        <Button
          className='cursor-pointer'
          onClick={closeProfile}
        >
          close
        </Button>
    </div>
  )
}

export default Profile
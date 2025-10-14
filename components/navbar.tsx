"use client"

import { useState } from "react";
import { Button } from "./ui/button";
import Profile from "./profile";

export default function Navbar() {

  const [showProfile, setShowProfile] = useState(false);

  const hanldeOpenProfile = () => {
    setShowProfile(true);
  }

  const handleCloseProfile = () => {
    setShowProfile(false);
  }

  // document.body.addEventListener('click', () => {
  //   console.log('sjfjskfjksb');
  //   setShowProfile(false);
  // });

  return (
    <div className="flex justify-between px-5 py-2 bg-neutral-200 dark:bg-neutral-800 shadow-sm items-center">
      <div className="">
        <h1 className="text-3xl font-bold">BMTC</h1>
      </div>
      <div>
        <Button
          className="w-8 h-8 bg-red-300 rounded-full cursor-pointer"
          onClick={hanldeOpenProfile}
          variant='profile'
        >

        </Button>
        {showProfile && <div className="fixed right-9 mt-0.5">
          <Profile closeProfile={handleCloseProfile} />
        </div>}
      </div>
    </div>
  );
}
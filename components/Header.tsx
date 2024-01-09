'use client';

import Image from "next/image";
import React from "react";
import {MagnifyingGlassIcon,UserCircleIcon} from '@heroicons/react/24/solid';
import Avatar from "react-avatar";

export default function Header() {  
  return (
    <header>
      <div className="flex felx-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
      <Image src="https://links.papareact.com/c2cdd5"
        alt="Trello logo"
        width={300}
        height={100}
        className="w-44 md:w-56 pb-10 md:pd-0 object-contain"
      />

      <div className="flex items-center space-x-5 flex-1 justify-end w-full">
        {/* search box */}
        <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-400"/>
          <input type="text" placeholder="Search" className="flex-1 outline-none p-2"/>
          <button hidden type="submit">search</button>
        </form>
        {/* Avatar */}
        <Avatar name="Mayank Sharma" round color="#0055D1" size="50"/>
      </div>
      </div>
      <div className="flex items-center justify-center px-5 md:py-5">
        <p className=" flex items-center px-5 py-2 text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055d1]">
          <UserCircleIcon className=" inline-block h-10 w-10 text-[#0055d1] mr-1"/>
          GPT is Summarizing your tasks for the day...
        </p>
      </div>
    </header>
  );
}
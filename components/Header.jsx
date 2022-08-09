import React from 'react';
import PropTypes from 'prop-types';
import Profilepic from '../public/images/My Passport.webp';
import Image from 'next/image';
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';

const Header = (props) => {
  return (
    <>
      <div>
        <div className="flex justify-between items-center max-w-6xl mx-5 lg:mx-auto">
          {/* Left-Side: Image. */}
          <div>
            <div className="relative hidden lg:inline-grid h-24 w-24 cursor-pointer">
              <Image
                src="https://links.papareact.com/ocw"
                layout="fill"
                alt="Logo"
                objectFit="contain"
              />
            </div>
            <div className="relative lg:hidden flex-shrink-0 h-10 w-10 cursor-pointer">
              <Image
                src="https://links.papareact.com/jjm"
                layout="fill"
                alt="Logo"
                objectFit="contain"
              />
            </div>
          </div>

          {/* Middle Side: Search Bar */}
          <div className='max-w-xs'>
            <div className="relative mt-1 p-3 rounded-md">
              <div className="absolute pl-3 inset-y-0 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-500"></SearchIcon>
              </div>
              <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md' type="text" name="search_bar" id="search_bar" placeholder="Search Here..." />
            </div>
          </div>

          {/* Right Side: Icons */}
          <div className='flex items-center justify-end space-x-4'>
            <HomeIcon className='navBtn'/>
            <MenuIcon className='h-6 md:hidden cursor-pointer'/>
            <PaperAirplaneIcon className='navBtn' />
            <PlusCircleIcon className='navBtn' />
            <UserGroupIcon className='navBtn' />
            <HeartIcon className='navBtn' />
            <div className='h-5 w-5 rounded-full'>
              <Image src={Profilepic} objectFit='contain' alt="Profile Pic" className='rounded-full cursor-pointer'/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {};

export default Header;

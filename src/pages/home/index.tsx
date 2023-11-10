import React from 'react'
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import SideBarRight from '../components/sidebar_right';
import Post from './post';
import PostCard from './postcard';
import BottomNav from '../components/bottom_nav';

const Home = () => {
  return (
    <div>
      <Header />
      <div className='bg-main-bg-color'>
        <div className='px-5 pt-6 flex max-w-[1240px] mx-auto justify-between gap-4 max-md:flex-col'>
          <Sidebar />
          <div className='flex flex-col gap-4 max-lg:grow max-md:mb-28 min-h-screen'>
            <Post />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
          <SideBarRight />
        </div>
        <BottomNav />
      </div>
    </div>
  )
}

export default Home;
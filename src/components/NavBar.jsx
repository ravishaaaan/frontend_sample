 import React,{useState} from 'react'
 import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
 
 const NavBar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }


   return (
     <div className='flex flex-row justify-between items-center h-24 max-w-[1920px] mx-auto px-12 text-white bg-[#1E1E1E]' >

        <span className='flex  '>

        <h1 className='w-auto text-3xl font-thin'>Easy</h1>
        <h1 className='w-auto text-3xl font-bold'>Ticket</h1>
        <h1 className='w-auto text-3xl font-thin'>.LK</h1>

        </span>
        <form class=" w-80 max-w-md mx-auto">   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                            <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Indoor, Outdoor..." required />
                            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
        </form>
        
        
        <ul className='hidden xl:flex' > 
            <li className='p-8 text-white/50 hover:text-white'>Home</li>
            <li className='p-8 text-white/50 hover:text-white'>Categories</li>
            <li className='p-8 text-white/50 hover:text-white'>Events</li>
            <li className='p-8 text-white/50 hover:text-white'>AboutUS</li>
            <li className='p-8 text-white/50 hover:text-white'>Login</li>
            <li className='p-8 text-white/50 hover:text-white'>Register</li>
        </ul>
        <div onClick={handleNav} className=' block xl:hidden'>
            {!nav ? <AiOutlineClose className=' text-white/50' size={20}/> : <AiOutlineMenu  className=' text-white/50' size={20}/>}
        
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#1E1E1E] ease-in-out duration-500 ' : 'fixed left-[-100%] '}>
                <span className='flex m-4'>

                    <h1 className='w-auto text-3xl font-thin'>Easy</h1>
                    <h1 className='w-auto text-3xl font-bold'>Ticket</h1>
                    <h1 className='w-auto text-3xl font-thin'>.LK</h1>

                </span>
            <ul className=' uppercase p-4'>
            <span className='flex space-x-4 border-b border-gray-600'>
                    <button className='m-4 px-3 py-1 text-white bg-black rounded-lg'>Login</button>
                    <button className='m-4 px-3 py-1 text-white bg-black rounded-lg'>Register</button>
             </span>
                <li className='p-4 text-white/50 border-b border-gray-600'>Home</li>
                <li className='p-4 text-white/50 border-b border-gray-600'>Categories</li>
                <li className='p-4 text-white/50 border-b border-gray-600'>Events</li>
                <li className='p-4 text-white/50'>AboutUS</li>
             

            </ul>
        </div>

     </div>
   )
 }
 
 export default NavBar
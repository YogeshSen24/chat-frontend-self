import React from 'react'
import { NavLink } from 'react-router-dom'

const defaultImg= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmg1qXykMte3oSgtupv1fzkHcluR7Xw0uV8g&s"

const ChatSidebarCard = ({profileImage=defaultImg , name , status="inactive" , lastMsg , path }) => {
    return (
    <NavLink to={path} className={({isActive})=>`flex  items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 ${isActive?"bg-gray-100" : "bg-gray-800"}  bg-transparent focus:outline-none`}>
            <img class="object-cover w-8 h-8 rounded-full" src={profileImage} alt="" />
            {status==="active"?<span class="h-2 w-2 rounded-full bg-emerald-500 absolute right-0.5 ring-1 ring-white bottom-0"></span>:""}
            <div class="text-left rtl:text-right">
                <h1 class="text-sm font-medium text-gray-700 capitalize dark:text-white">{name}</h1>

                <p class="text-xs text-gray-500 dark:text-gray-400">{lastMsg}</p>
            </div>
        </NavLink>
    )
}

export default ChatSidebarCard

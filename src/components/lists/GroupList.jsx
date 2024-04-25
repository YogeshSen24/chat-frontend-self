import React from 'react'
import GroupsListData from '../../listings/GroupListData.js'
import ChatSidebarCard from "../cards/ChatSidebarCard.jsx"
import { Link } from 'react-router-dom'

const GroupList = () => {
    fetch("")
    return (
        <div class="h-screen py-8 overflow-y-auto bg-white border-l border-r sm:w-64 w-60 dark:bg-gray-900 dark:border-gray-700">
            <div className='flex  items-center'>
            <h2 class="px-5 text-lg font-medium text-gray-800 dark:text-white">Groups</h2>
            <Link to="/groups/create" className="p-2 mx-5 bg-green-400 rounded text-sm font-thin text-gray-800 dark:text-white" >Create</Link>
            <Link to="/groups/join" className="p-2 mx-5 bg-green-400 rounded text-sm font-thin text-gray-800 dark:text-white" >Join</Link>
            </div>
            <div class="mt-8 space-y-4">
                {
                    GroupsListData.length<1&& <h4 class="px-5 text-sm font-bold text-gray-400 ">You dont have any friends yet!!!</h4>
                }
                {
                    GroupsListData?.map(({ name, lastMsg, path }) => <ChatSidebarCard name={name} lastMsg={lastMsg} path={path} />)
                }
            </div>
        </div>
    )
}

export default GroupList

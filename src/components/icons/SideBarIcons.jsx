import React from 'react'
import { NavLink } from 'react-router-dom'
import CIcon from '@coreui/icons-react';

const SideBarIcons = ({ icon, path }) => {
    return (

        <NavLink  to={path} className={({isActive})=>`p-2 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg ${isActive ?"dark:text-blue-400" : "dark:text-gray-400" }   dark:hover:bg-gray-800 hover:bg-gray-100`}>
            {icon}
        </NavLink>

    )
}

export default SideBarIcons

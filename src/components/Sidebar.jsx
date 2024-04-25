import React from 'react'
import Logo from "./icons/Logo.jsx"
import navRoutes from "../listings/navRoutes.js"
import SideBarIcons from "./icons/SideBarIcons.jsx"

const Sidebar = () => {
    return (
        <div>
            <aside class="flex">
                <div class="flex flex-col items-center w-16 h-screen py-8 space-y-8 dark:bg-gray-900 dark:border-gray-700">
                    <Logo />
                    {
                        navRoutes.map(({ id, path, icon }) => {
                            return <SideBarIcons path={path} icon={icon} />
                        })
                    }
                </div>
            </aside>
        </div>
    )
}

export default Sidebar

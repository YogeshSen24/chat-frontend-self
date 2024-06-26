import React from 'react'
import { Link } from 'react-router-dom'


const UserFirstLookCard = ({username , bio , profielImg , unknown=true , email , mutuals=[]}) => {
    const handleSendFriendRequest = () => {
        console.log("send friend request")
    }
  return (
    <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div className="flex justify-center -mt-16 md:justify-end">
        <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"/>
    </div>
    <Link to="/" className="text-lg font-medium text-blue-600 dark:text-blue-300" tabindex="0" role="link">John Doe</Link>
    <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>

    {
        unknown && (
        <div className="flex justify-between mt-4">
            <div className="flex -space-x-4 rtl:space-x-reverse">
                {/* {
                    mutuals.map((image)=><img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={image} alt=""/>
                )
            } */}
            {
                mutuals[0]&&<img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={mutuals[0]} alt=""/>
            }
            {
                mutuals[1]&&<img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={mutuals[1]} alt=""/>
            }
            {
                mutuals[2]&&<img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={mutuals[2]} alt=""/>
            }
            {
                mutuals[3]&&<img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={mutuals[3]} alt=""/>
            }
            {
            mutuals?.length>4&&(<a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">{`+${mutuals?.length-4}`}</a>)
            }
</div>
        <button onClick={handleSendFriendRequest} className="mt-2 text-green-300">Add Friend</button>
        </div>
        )
    }
</div>
      
  )
}

export default UserFirstLookCard

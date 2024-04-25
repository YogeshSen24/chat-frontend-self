import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({img="https://merakiui.com/images/logo.svg"}) => {
  return (
      <Link to="/">
            <img className="w-auto h-6" src={img} alt="" />
        </Link>
  )
}

export default Logo

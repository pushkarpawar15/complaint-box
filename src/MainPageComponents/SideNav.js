import React from 'react'

export default function SideNav(props) {
  return (
    <div class='top-0 left-0 h-full  m-0 flex flex-col text-white shadow-lg bg-gray-900'>
	    <button class='sidebar-text mt-20' onClick={()=>{props.handleClick(0)}}>Home</button>
      <button class='sidebar-text mt-8' onClick={()=>{props.handleClick(1)}} >Complaints</button>
      <i class='sidebar-text mt-auto mb-20'>Log Out</i>
    </div>
  )
}
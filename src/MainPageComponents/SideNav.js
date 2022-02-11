import React from 'react'

export default function SideNav(props) {
  return (
    <div class='top-0 left-0 h-full  m-0 flex flex-col text-white shadow-lg bg-gray-900'>
	    <button class='sidebar-text' onClick={()=>props.handleClick(0)}>Home</button>
      <button class='sidebar-text' onClick={()=>props.handleClick(1)} >Complaints</button>
      <i class='sidebar-text'>C</i>
      <i class='sidebar-text'>D</i>
    </div>
  )
}
import React from 'react'
import data from './msgs.json'
export default function RightSideNav() {
  return (
    <div class='h-full  m-0 flex flex-col text-white shadow-lg bg-gray-900 right-0 top-0'>
		<i class='sidebar-text h-20 flex-col'>Complaints</i>
		<i class='flex flex-col p-4 ml-12'>
			Filters
			{filters(["Acads","Hostel","Mess"])}
		</i>
		<i class='h-fit flex-col mx-auto shadow-lg bg-gray-800 text-green-500 w-4/5 rounded-3xl mt-8 mb-8 text-xl'>{Subjects(data)}</i>
    </div>
  )
}

const filters = (listOfFilters) => {
	return listOfFilters.map( (name) => {
		return <div class="form-check text-xl p-1">
		<input class="form-check-input appearance-none h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked"  />
		<label class="form-check-label inline-block text-green-500" for="flexCheckChecked">
			{name}
		</label>
		</div>
	})
}

const Subjects = (data) => 
{
	return data.map( (item) => 
	{
		return <button class='p-4'>
			{item.subject}
		</button>
	})
}
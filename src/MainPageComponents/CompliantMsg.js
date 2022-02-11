import React from 'react'
import data from './msgs.json'
export default function CompliantMsg() {
  return (
	  <div>{Complaints(data)}</div>
  )
}

const Complaints = (data) => {
	return data.map((item)=>{
		return <div class="p-6">
		<div class="rounded-2xl overflow-hidden shadow-lg w-full p-6 bg-blue-400 my-transition">
		<div class="px-6 py-4">
			<div class="font-bold text-2xl mb-2">
				{item.subject}
			</div>
			<p class="text-gray-700 text-lg">
			{item.data}
			</p>
		</div>
		<div class="px-6 pt-4 pb-2">
			{item.tags.map( (tag) => {
				return <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
			})}
		</div>
		</div>
	</div>
	})
}
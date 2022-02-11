import React from 'react'

export default function ComplaintForm() {
  return (
	<div class='my-transition'>
	
	<h1>Complaint Form</h1> <br/>
	
	<form class="w-full max-w-lg h-full text-xl">
		<div class="flex flex-wrap -mx-3 mb-6">
			<div class="w-full md:w-full px-3 mb-6 md:mb-0">
				<label class="block uppercase tracking-wide text-gray-700 font-bold mb-2" for="grid-first-name">
					Subject
				</label>
			<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
			<p class="text-red-500 text-xs italic">Please fill out this field.</p>
		</div>
		</div>
		<div class="flex flex-wrap mb-6">
			<label for="exampleFormControlTextarea1" class="form-label inline-block mb-2 text-gray-700"
			>Enter Complaint</label>
			<textarea
			class="
				form-control
				block
				w-full
				px-3
				py-1.5
				text-base
				font-normal
				bg-clip-padding
				border border-solid border-gray-300
				rounded
				transition
				ease-in-out
				m-0
				focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
				bg-gray-200 text-gray-700
			"
			id="exampleFormControlTextarea1"
			rows="3"
			placeholder="Your message"
			></textarea>
		</div>
		<br/>
		<div class="flex space-x-2 justify-center">
  			<button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Register Compliant</button>
		</div>
	</form>

	</div>
  )
}

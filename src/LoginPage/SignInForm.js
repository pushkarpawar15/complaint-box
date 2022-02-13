import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const UserLogin=()=>{
	return( 
	<div className='formCenter'>
	<form className='formFields'>
		<div className='formField'>
			<label className='formFieldLabel'>E-Mail Address</label>
			<input
				type='email'
				id='email'
				className='formFieldInput'
				placeholder='Enter your email'
				name='email'
			/>
		</div>

		<div className='formField'>
			<label className='formFieldLabel'>Password</label>
			<input 
				type='password'
				id='password'
				className='formFieldInput'
				placeholder='Enter your password'
				name='password'
			/>
		</div>

		<div className='formField'>
			<button className='formFieldButton'>Sign In</button>
			<Link to='/sign-up' className='formFieldLink'>
				Create an account
			</Link>
		</div>
	</form>
</div>
)}

const AdminLogin=()=>{
	return( 
	<div className='formCenterAdmin'>
	<form className='formFields'>
		<div className='formField'>
			<label className='formFieldLabel'>Admin E-Mail Address</label>
			<input
				type='email'
				id='email'
				className='formFieldInput'
				placeholder='Enter your email'
				name='email'
			/>
		</div>

		<div className='formField'>
			<label className='formFieldLabel'>Password</label>
			<input 
				type='password'
				id='password'
				className='formFieldInput'
				placeholder='Enter your password'
				name='password'
			/>
		</div>

		<div className='formField'>
			<button className='formFieldButton'>Sign In</button>
			<Link to='/sign-up' className='formFieldLink'>
				Create an account
			</Link>
		</div>
	</form>
</div>
)}

export default function SignInForm(props){
	return (
		props.isAdmin==true? AdminLogin(): UserLogin()
	);
}

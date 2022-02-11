import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function SignInForm() {
	return (
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
	);
}

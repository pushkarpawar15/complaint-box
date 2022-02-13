import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function SignUpForm() {
	return (
		<div className='formCenter'>
			<form className='formFields'>
				<div className='formField'>
					<label className='formFieldLabel'>First Name</label>
					<input
						type='text'
						id='name'
						className='formFieldInput'
						placeholder='Enter your full name'
						name='name'
					/>
				</div>
				<div className='formField'>	
					<label className='formFieldLabel'>Last Name</label>
					<input
						type='text'
						id='name'
						className='formFieldInput'
						placeholder='Enter your full name'
						name='name'
					/>
				</div>
				<div className='formField'>	
					<label className='formFieldLabel'>Username</label>
					<input
						type='text'
						id='name'
						className='formFieldInput'
						placeholder='Enter your full name'
						name='name'
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
					<label className='formFieldCheckboxLabel'>
						<input
							className='formFieldCheckbox'
							type='checkbox'
							name='hasAgreed'
						/>{' '}
						I agree all statements in{' '}
						<a href='null' className='formFieldTermsLink'>
							terms of service
						</a>
					</label>
				</div>

				<div className='formField'>
					<button className='formFieldButton'>Sign Up</button>{' '}
					<Link to='/' className='formFieldLink'>
						I'm already member
					</Link>
				</div>
			</form>
		</div>
	);
}

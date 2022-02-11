import React from 'react';
import { NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import SignIn from './SignInForm';
import SignUp from './SignUpForm';
import './styles.css';

export default function layout() {
	return (
		<div className='App'>
			<div className='appAside' />
			<div className='appForm'>
				<div className='pageSwitcher'>
					<NavLink
						to='/'
						style={({ isActive }) => {
							return {
								backgroundColor: isActive ? '#111827' : '#40434e',
								color: isActive ? '#22c55e' : '#9da6b1',
							};
						}}
						className='pageSwitcherItem'>
						Sign In
					</NavLink>
					<NavLink
						exact
						to='/sign-up'
						style={({ isActive }) => {
							return {
								backgroundColor: isActive ? '#111827' : '#40434e',
								color: isActive ? '#22c55e' : '#9da6b1',
							};
						}}
						className='pageSwitcherItem'>
						Sign Up
					</NavLink>
				</div>

				<div className='formTitle'>
					<NavLink
						to='/'
						style={({ isActive }) => {
							return {
								color: isActive ? '#22c55e' : '#707c8b',
								borderBottom: isActive ? '1px solid #111827' : null,
							};
						}}
						className='formTitleLink'>
						Sign In
					</NavLink>{' '}
					or{' '}
					<NavLink
						exact
						to='/sign-up'
						style={({ isActive }) => {
							return {
								color: isActive ? '#22c55e' : '#707c8b',
								borderBottom: isActive ? '1px solid #111827' : null,
							};
						}}
						className='formTitleLink'>
						Sign Up
					</NavLink>
				</div>
				<Routes>
					<Route exact path='/' element={<SignIn />} />
					<Route path='/sign-up' element={<SignUp />} />
				</Routes>
			</div>
		</div>
	);
}

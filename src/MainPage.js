import { useState } from 'react';
import SideNav from './MainPageComponents/SideNav';
import CompliantMsg from './MainPageComponents/CompliantMsg';
import RightSideNav from './MainPageComponents/RightSideNav';
import ComplaintForm from './MainPageComponents/ComplaintForm';
import datas from './MainPageComponents/msgs.json';
import Login from './LoginPage/Login'

function MainPage() {
	const [count, setCount] = useState(0);
	const [data, setData] = useState(datas);
	const [isLoggedIn, setIsLoggedIn] = useState(1);

	const form = (
		<div>
			<div class='h-1/6 '></div>
			<div class='flex justify-center align-middle'>
				<ComplaintForm />
			</div>
		</div>
	);
	const msgs = <CompliantMsg data={data} setData={(list) => setData(list)} />;
	const rnav = (
		<div class='w-2/6 pl-4'>
			<RightSideNav data={data} setData={(list) => setData(list)} />
		</div>
	);
	const renderAppropriateWindow = (val) => {
		switch (val) {
			case 0:
				return form;
			case 1:
				return msgs;
			default:
				return form;
		}
	};

	const handleNavClick = (val) => {
		setCount(val);
	};

	const mainpage= ()=> { 
		return (
		<div class='flex text-2xl min-h-screen bg-slate-500'>
				<div class='w-1/6 pr-4'>
					<SideNav
						handleClick={(val) => {
							handleNavClick(val);
						}}
						LogOutUser={()=>{setIsLoggedIn(0);}
			  }
					/>
				</div>
				<div class='flex flex-col w-3/6 '>{renderAppropriateWindow(count)}</div>
				{count === 1 ? rnav : null}
			</div>
		)
	  };


	return (
		isLoggedIn==1? mainpage(): <Login/>
	);
}
export default MainPage;

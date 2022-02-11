import { useState } from "react";
import SideNav from "./MainPageComponents/SideNav";
import CompliantMsg from "./MainPageComponents/CompliantMsg";
import RightSideNav from "./MainPageComponents/RightSideNav";
import ComplaintForm from "./MainPageComponents/ComplaintForm";

const form = <div><div class="h-1/6"></div><div class="flex justify-center align-middle "><ComplaintForm/></div></div>
const msgs = <CompliantMsg/>
const rnav = <div class="w-2/6 pl-4"><RightSideNav/></div>


function MainPage() {
  const [count, setCount] = useState(0);
  
  const renderAppropriateWindow = (val) => {
    switch(val)
    {
      case 0:return form
      case 1:return msgs
      default:return form
    }
  }

  const handleNavClick = (val) => {
    setCount(val)
  }

  return (
    <div class="flex text-2xl min-h-screen">
      <div class="w-1/6 pr-4">
        <SideNav handleClick={(val)=>{handleNavClick(val)}}/>
      </div>
      <div class="flex flex-col p-8 w-3/6 ">
          {renderAppropriateWindow(count)}
      </div>
      {(count === 1) ? rnav:null}
    </div>
  );
}

export default MainPage;

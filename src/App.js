import Layout from './LoginPage/layout'
import MainPage from './MainPage'

import React, { useState } from 'react';

export default function App(){
    const[count,setcount] =useState(1);

    return(
        <div>
           {
              (count==0)?<Layout/>: <MainPage/> 
           }
        </div>
    )
}
import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';

import Sidebar from './Sidebar';
// import Topbar from './Topbar';
import UseWindowSize from '../../utils/valueSize';


const Layout = ({ children, user = {}, title = "", showNotifications = false, message = "" }) => {
 const size = UseWindowSize();
 const { height, width } = size;

 const [navSide, setNavSide] = useState(false);
 const [navTop, setNavTop] = useState(false);


 useEffect(() => {
  if (width > 768) {
   setNavSide(true);
   setNavTop(false);
  }
  if (width <= 768) {
   setNavSide(false);
   setNavTop(true);
  }
 }, [width]);



 return (
  <div className="flex flex-row">

   <Sidebar
    navSide={navSide}
    navTop={navTop}
    callBack={() => setNavSide(!navSide)}
    height={height}
    user={user}
   />

   <div className="h-screen flex-col overflow-y-auto" style={{ flex: 4 }}>
    {/* <Topbar
     navSide={navSide}
     navTop={navTop}
     callBack={() => setNavSide(!navSide)}
    /> */}
    <div className="overflow-y-auto" style={{ height: height }}> {/* height Top Nav: 48px, Bot nav: 40px */}
     <div className="p-5 w-full bg-dashboardcontentpage  rounded shadow min-h-full">
      <div className="bg-white">
       {children}
      </div>
     </div>

    </div>
   </div >
  </div >
 );
};

export default Layout;

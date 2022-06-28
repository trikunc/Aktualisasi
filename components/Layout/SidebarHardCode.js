import React from 'react';

import Constant from '../../utils/Constant';
import SidebarAdminData from './Sidebar/SidebarAdmin';
import SidebarContainer from './Sidebar/SidebarContainer';
// import SidebarGroupAdmin from './Sidebar/SidebarGroupAdmin';
// import SidebarUser from './Sidebar/SidebarUser';

const SidebarHardCode = ({ user }) => {
  return (
    <>
      {SidebarAdminData.map((item, index) => {
        return <SidebarContainer key={`sidebarAdmin-${index}`}
          child={item.child}
          href={item.href}
          icon={item.icon}
          routeGroup={item.routeGroup}
          title={item.title}
          type={item.type} />
      })}
    </>
  );

  // if (user.roleId === Constant.USER_ROLE_REGULAR_GROUPADMIN) return (
  //  <>
  //   {SidebarGroupAdmin.map((item, index) => {
  //    return <SidebarContainer key={`sidebarGroupAdmin-${index}`}
  //     child={item.child}
  //     href={item.href}
  //     icon={item.icon}
  //     routeGroup={item.routeGroup}
  //     title={item.title}
  //     type={item.type} />
  //   })}
  //  </>
  // );

  // if (user.roleId === Constant.USER_ROLE_REGULAR_USER) return (
  //  <>
  //   {SidebarUser.map((item, index) => {
  //    return <SidebarContainer key={`sidebarUser-${index}`}
  //     child={item.child}
  //     href={item.href}
  //     icon={item.icon}
  //     routeGroup={item.routeGroup}
  //     title={item.title}
  //     type={item.type} />
  //   })}
  //  </>
  // );
};

export default SidebarHardCode;

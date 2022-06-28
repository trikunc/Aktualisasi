import Image from 'next/image';
import {
  Close,
} from '@mui/icons-material';

import Logo from '../../public/assets/icons/icon_yogyakarta.png'
import RouteName from '../../utils/RouteName';
import SidebarHardCode from './SidebarHardCode';

const Sidebar = ({ navSide, navTop, callBack, height, user }) => {
  return (
    <div
      className="min-w-full md:min-w-[30%] lg:min-w-0 h-screen bg-sidebar sticky inset-y-0 left-0 transform  md:relative md:translate-x-0 transition duration-500 ease-in-out overflow-hidden shadow bg-neutral-50"
      style={{ flex: 1 }}
    >
      <div className="px-2 h-full decoration-zinc-500">
        <div className="flex mb-6 flex-col items-center font-bold">
          {navTop && (
            <div className="absolute top-0 right-0">
              <button
                className="mobile-menu-button p-4 focus:outline-none text-white"
                onClick={() => callBack()}
              >
                {navSide && <Close />}
              </button>
            </div>
          )}
          <div className="rounded-full max-h-[100px] max-w-[100px] flex items-center justify-center mt-5">
            <Image src={Logo} alt="Logo DIY" />
          </div>
          <h1 className="mt-6 text-3xl">BLKPP</h1>
          <h4 className="mt-1 text-center">
            BALAI LATIHAN KERJA DAN PENGEMBANGAN PRODUKTIVITAS
          </h4>
        </div>

        <div className="overflow-y-auto scrollbar-hide" style={{ height: height - 250 }}>
          {/* {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })} */}
          <SidebarHardCode />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

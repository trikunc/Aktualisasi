import Image from 'next/image';
import Link from 'next/link';
import { BlurCircular, KeyboardArrowDown, KeyboardArrowRight, KeyboardArrowUp } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { useState } from 'react';

import RouteName from '../../../utils/RouteName';
import { SIDEBAR_TYPE_CHILD, SIDEBAR_TYPE_PARENT, SIDEBAR_TYPE_PARENT_CHILDLESS } from './SidebarAdmin'



const SidebarContainer = ({ href, title, icon, child = [], routeGroup = [], type = SIDEBAR_TYPE_PARENT_CHILDLESS }) => {
  const router = useRouter()
  const isNavHighlighted = routeGroup.reduce((acc, next) => {
    let isRoute = router.asPath.indexOf(next) > -1
    return acc || isRoute
  }, false) || router.asPath === href

  const [isChildGroupShown, setIsChildGroupShown] = useState(isNavHighlighted)
  const toggleChildGroup = () => setIsChildGroupShown(!isChildGroupShown)

  if (type === SIDEBAR_TYPE_PARENT_CHILDLESS) {
    return <SidebarItem href={href} icon={icon} title={title} type={type} routeGroup={routeGroup} isNavHighlighted={isNavHighlighted} />
  }

  if (type === SIDEBAR_TYPE_PARENT) {
    return <>
      <div className="flex flex-row justify-between items-center pl-2 h-14 no-underline list-none text-lg font-bold hover:bg-gray-400 cursor-pointer" onClick={toggleChildGroup}
        style={{ backgroundColor: isNavHighlighted ? '#9AECDB' : 'none' }}>
        <div className="flex flex-row text-base">
          {/* <Image width={24} height={24} src={icon} alt={title} /> */}
          <div className="ml-4">{title}</div>
        </div>
        <div>
          {isChildGroupShown
            ? <KeyboardArrowUp />
            : <KeyboardArrowDown />
          }
        </div>
      </div>
      {isChildGroupShown && child.map((item, index) => {
        const isChildNavHighlighted = [href, ...routeGroup].reduce((acc, next) => {
          let isRoute = router.asPath.indexOf(next) > -1
          return acc || isRoute
        }, false)

        return <SidebarItem href={item.href}
          key={`sidebarItemChild-${index}`}
          icon={item.icon}
          title={item.title}
          type={item.type}
          routeGroup={item.routeGroup}
          isNavHighlighted={isChildNavHighlighted}
          showArrow={isChildNavHighlighted} />
      })}
    </>
  }
}

export default SidebarContainer


const SidebarItem = ({ href, title, icon, routeGroup = [], type = SIDEBAR_TYPE_PARENT_CHILDLESS }) => {
  const router = useRouter()
  const isNavHighlighted = routeGroup.reduce((acc, next) => {
    let isRoute = router.asPath.indexOf(next) > -1
    return acc || isRoute
  }, false) || router.asPath === href

  const __renderImage = () => {
    // if (type === SIDEBAR_TYPE_PARENT_CHILDLESS) return <Image width={24} height={24} src={icon} alt={title} />
    if (type === SIDEBAR_TYPE_CHILD) return <BlurCircular fontSize="small" />
    return <></>
  }

  const __renderTitle = () => {
    if (type === SIDEBAR_TYPE_PARENT_CHILDLESS) return <div className="ml-4 ">{title}</div>
    if (type === SIDEBAR_TYPE_CHILD) return <div className="ml-4 flex flex-row items-center">{title}</div>
    return <></>
  }

  const __containerClassName = () => {
    if (type === SIDEBAR_TYPE_PARENT_CHILDLESS) return "flex flex-row text-base"
    if (type === SIDEBAR_TYPE_CHILD) return "flex flex-row  h-14 pl-4 items-center no-underline text-sm "
    return <></>
  }

  return <Link href={href} passHref>
    <div className={`flex flex-row justify-between items-center p-2 h-14 no-underline list-none text-lg hover:bg-[#CAD3C8] cursor-pointer ${type === SIDEBAR_TYPE_CHILD ? '' : 'font-bold'}`}
      style={{ backgroundColor: isNavHighlighted ? '#9AECDB' : 'none' }}>
      <div className={__containerClassName()}>
        {__renderImage()}
        {__renderTitle()}
      </div>
      {isNavHighlighted && <KeyboardArrowRight />}
    </div>
  </Link>
}
import RouteName from "../../../utils/RouteName";

const SIDEBAR_TYPE_PARENT_CHILDLESS = 0
const SIDEBAR_TYPE_PARENT = 1
const SIDEBAR_TYPE_CHILD = 2

let SidebarAdminData = [
 // DASHBOARD
 // {
 //  href: `${RouteName.dashboardIndex}`,
 //  type: SIDEBAR_TYPE_PARENT_CHILDLESS,
 //  title: "Dashboard",
 //  icon: AddModeratorIcon,
 //  routeGroup: []
 // },
 // ASET
 {
  href: `${RouteName.assetIndex}`,
  type: SIDEBAR_TYPE_PARENT,
  title: "Aset Kejuruan",
  routeGroup: [
   `${RouteName.asset_tik}`,
   `${RouteName.asset_las}`,
  ],
  child: [
   {
    href: `${RouteName.asset_tik}`,
    type: SIDEBAR_TYPE_CHILD,
    title: "Kejuruan TIK",
    routeGroup: [
     // RouteName.pembelajaranViewJadwal(``)
    ],
   }, {
    href: `${RouteName.asset_las}`,
    type: SIDEBAR_TYPE_CHILD,
    title: "Kejuruan Pengelasan",
    routeGroup: [
     // RouteName.pembelajaranViewUpdateJadwal(``),
     // RouteName.pembelajaranEditJadwalById(``)
    ],
   },

  ]
 },

]

export default SidebarAdminData
export {
 SIDEBAR_TYPE_PARENT_CHILDLESS,
 SIDEBAR_TYPE_PARENT,
 SIDEBAR_TYPE_CHILD,
}
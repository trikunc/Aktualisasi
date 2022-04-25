import RouteName from "../../../utils/RouteName";
import { AddModerator } from '@mui/icons-material/AddModerator';

const SIDEBAR_TYPE_PARENT_CHILDLESS = 0
const SIDEBAR_TYPE_PARENT = 1
const SIDEBAR_TYPE_CHILD = 2

let SidebarAdminData = [
 // DASHBOARD
 // {
 //  href: `${RouteName.dashboardIndex}`,
 //  type: SIDEBAR_TYPE_PARENT_CHILDLESS,
 //  title: "Dashboard",
 //  icon: AddModerator,
 //  routeGroup: []
 // },
 // ASET
 {
  href: `${RouteName.assetIndex}`,
  type: SIDEBAR_TYPE_PARENT,
  title: "Aset Kejuruan",
  icon: AddModerator,
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
 // // PEMBELAJARAN
 // {
 //  href: RouteName.pembelajaranIndex,
 //  type: SIDEBAR_TYPE_PARENT,
 //  title: "Pembelajaran",
 //  icon: AddModerator,
 //  routeGroup: [
 //   RouteName.pembelajaranIndex,
 //   RouteName.pembelajaranAdd,
 //   RouteName.pembelajaranUpdate,
 //   RouteName.pembelajaranLaporan,
 //   RouteName.pembelajaranViewJadwal(``),
 //   RouteName.pembelajaranViewUpdateJadwal(``),
 //   RouteName.pembelajaranEditJadwalById(``),
 //   RouteName.pembelajaranLaporanView(``)
 //  ],
 //  child: [
 //   {
 //    href: RouteName.pembelajaranIndex,
 //    type: SIDEBAR_TYPE_CHILD,
 //    title: "Jadwal Pembelajaran",
 //    routeGroup: [
 //     RouteName.pembelajaranViewJadwal(``)
 //    ],
 //   }, {
 //    href: RouteName.pembelajaranAdd,
 //    type: SIDEBAR_TYPE_CHILD,
 //    title: "Entry Pembelajaran",
 //    routeGroup: [
 //     RouteName.pembelajaranViewUpdateJadwal(``),
 //     RouteName.pembelajaranEditJadwalById(``)
 //    ],
 //   },

 //  ]
 // },
 // // GROUP PENGAJAR
 // {
 //  href: RouteName.groupIndex,
 //  type: SIDEBAR_TYPE_PARENT,
 //  title: "Group Pengajar",
 //  icon: AddModerator,
 //  routeGroup: [
 //   RouteName.groupAdd,
 //   RouteName.groupEdit(``),
 //   RouteName.groupPembelajaran,
 //   RouteName.groupPembelajaranAddAnggota(``),
 //  ],
 //  child: [
 //   {
 //    href: RouteName.groupIndex,
 //    type: SIDEBAR_TYPE_CHILD,
 //    title: "Buat Group",
 //    routeGroup: [
 //     RouteName.groupAdd,
 //     RouteName.groupEdit(``)
 //    ],
 //   }, {
 //    href: RouteName.groupPembelajaran,
 //    type: SIDEBAR_TYPE_CHILD,
 //    title: "Group Pembelajaran",
 //    routeGroup: [
 //     RouteName.groupPembelajaran,
 //     RouteName.groupPembelajaranAddAnggota(``),
 //    ],
 //   },
 //  ]
 // },
 // // JP
 // {
 //  href: RouteName.jpIndex,
 //  type: SIDEBAR_TYPE_PARENT,
 //  title: "JP",
 //  icon: AddModerator,
 //  routeGroup: [
 //   RouteName.jpKurikulum,
 //   RouteName.jpKurikulumByPengajarId(``),
 //   RouteName.jpGroupViewDetail(``)
 //  ],
 //  child: [
 //   {
 //    href: RouteName.jpIndex,
 //    type: SIDEBAR_TYPE_CHILD,
 //    title: "JP WI",
 //    routeGroup: [],
 //   }, {
 //    href: RouteName.jpKurikulum,
 //    type: SIDEBAR_TYPE_CHILD,
 //    title: "JP Kurikulum",
 //    routeGroup: [
 //     RouteName.jpKurikulumByPengajarId(``),
 //    ],
 //   }, {
 //    href: RouteName.jpGroup,
 //    type: SIDEBAR_TYPE_CHILD,
 //    title: "JP Group",
 //    routeGroup: [
 //     RouteName.jpGroupViewDetail(``)
 //    ],
 //   }, {
 //    href: RouteName.jpGrafik,
 //    type: SIDEBAR_TYPE_CHILD,
 //    title: "JP Grafik",
 //    routeGroup: [],
 //   },
 //  ]
 // },
 // // PENGGANTI
 // {
 //  href: RouteName.penggantiIndex,
 //  type: SIDEBAR_TYPE_PARENT,
 //  title: "Pengganti",
 //  icon: AddModerator,
 //  routeGroup: [
 //   RouteName.penggantiUploadFoto,
 //  ],
 //  child: [
 //   {
 //    href: RouteName.penggantiIndex,
 //    type: SIDEBAR_TYPE_CHILD,
 //    title: "Pengganti WI",
 //    routeGroup: [],
 //   }, {
 //    href: RouteName.penggantiUploadFoto,
 //    type: SIDEBAR_TYPE_CHILD,
 //    title: "Upload Foto Pengganti",
 //    routeGroup: [],
 //   },
 //  ]
 // },
 // // SPT
 // {
 //  href: RouteName.sptSettingIndex,
 //  type: SIDEBAR_TYPE_PARENT,
 //  title: "SPT",
 //  icon: AddModerator,
 //  routeGroup: [
 //   RouteName.sptCetakIndex
 //  ],
 //  child: [
 //   {
 //    href: RouteName.sptSettingIndex,
 //    type: SIDEBAR_TYPE_CHILD,
 //    title: "Setting SPT",
 //    routeGroup: [],
 //   }, {
 //    href: RouteName.sptCetakIndex,
 //    type: SIDEBAR_TYPE_CHILD,
 //    title: "Cetak SPT",
 //    routeGroup: [],
 //   },
 //  ]
 // },
 // // LAPORAN
 // {
 //  href: RouteName.laporanKurikulumIndex,
 //  type: SIDEBAR_TYPE_PARENT,
 //  title: "Laporan",
 //  icon: AddModerator,
 //  routeGroup: [
 //   RouteName.laporanWiIndex,
 //  ],
 //  child: [
 //   {
 //    href: RouteName.laporanKurikulumIndex,
 //    type: SIDEBAR_TYPE_CHILD,
 //    title: "Laporan Kurikulum",
 //    routeGroup: [],
 //   }, {
 //    href: RouteName.laporanWiIndex,
 //    type: SIDEBAR_TYPE_CHILD,
 //    title: "Laporan WI",
 //    routeGroup: [],
 //   },
 //  ]
 // },
 // // KELOLA USER
 // {
 //  href: RouteName.manageUser,
 //  type: SIDEBAR_TYPE_PARENT_CHILDLESS,
 //  title: "Kelola User",
 //  icon: AddModerator,
 //  routeGroup: []
 // },
 // // LOG AKTIVITAS
 // {
 //  href: RouteName.logActivityIndex,
 //  type: SIDEBAR_TYPE_PARENT_CHILDLESS,
 //  title: "Log Aktivitas",
 //  icon: pengajar,
 //  routeGroup: []
 // },
]

export default SidebarAdminData
export {
 SIDEBAR_TYPE_PARENT_CHILDLESS,
 SIDEBAR_TYPE_PARENT,
 SIDEBAR_TYPE_CHILD,
}
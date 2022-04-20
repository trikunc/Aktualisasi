const RouteName = {
 login: `/`,
 dashboard: `/dashboard`,


 errorCode: {
  notSuperadmin: 1000,
  pengajarNotFound: 1001,
  groupNotFound: 1002,
 },

 errorMessage: {
  "1000": "Anda tidak login sebagai admin, silahkan login sebagai admin untuk membuka link tersebut",
  "1001": "Data pengajar tidak ditemukan.",
  "1002": "Data grup pengajar tidak ditemukan.",
 }
}

export default RouteName
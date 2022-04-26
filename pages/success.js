import { getSession } from "next-auth/react"

import Constant from "../utils/Constant"
import RouteName from "../utils/RouteName"

export const getServerSideProps = async (context) => {
 const session = await getSession(context)

 console.log('session: ', session)
 let role = session.user?.role

 if (!role) return {
  redirect: {
   permanent: false,
   destination: `${RouteName.login}?mc=${RouteName.errorCode.notSuperadmin}`
  }
 }



 if (role === "ADMIN") return {
  redirect: {
   permanent: false,
   // destination: `${RouteName.dashboard}`
   destination: `${`/admin/asset/Tik`}`
  }
 }


 return {
  props: {
   user: session.user
  }
 }
}

const Success = () => {
 return <></>
}

export default Success
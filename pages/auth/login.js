import { TextField } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react'
import { signIn } from 'next-auth/react'

import RouteName from '../../utils/RouteName'
import { useRouter } from 'next/router';
import Logo from '../../public/assets/icons/icon_yogyakarta.png'

const Login = () => {
 const router = useRouter();

 const [nip, setNip] = useState('')
 const [password, setPassword] = useState('')

 const handleNip = (event) => {
  setNip(event.target.value);
 };
 const handlePass = (event) => {
  setPassword(event.target.value);
 };

 const __handleLogin = async () => {

  let status = await signIn('credentials', {
   redirect: false,
   nip: nip,
   password: password
  })
  console.log('status=> ', status)

  if (status.ok) {
   router.replace(`${RouteName.success}`)
  }

 }
 return (
  <div className="w-full h-screen flex flex-row">
   <div className="w-1/2 h-full bg-[#546de5] flex flex-col items-center justify-center">
    <div
     className="flex mb-4"
     style={{ width: 150 }}
    >
     <Image src={Logo} alt="jogja icon" />
    </div>
    <h2 className="mb-2 font-bold text-xl">Balai Latihan Kerja dan Pengembangan Produktivitas</h2>
    <h2 className="mb-2 font-bold text-xl">Dinas Tenaga Kerja dan Transmigrasi</h2>
    <h2 className="mb-2 font-bold text-xl">Daerah Istimewa Yogyakarta</h2>
   </div>

   <div className="w-1/2 h-full bg-gray-100 flex justify-center items-center">
    <div className="w-[70%] flex flex-col justify-center items-center text-center">
     <h1 className="mb-4 text-3xl">Hello, Welcome Back</h1>
     <h2 className="mb-8 text-md text-gray-500">Silahkan masukkan User dan Password anda untuk mengakses halaman yang terkunci dan Dashboard</h2>
     <TextField
      className="mb-8"
      id="outlined-name"
      label="NIP"
      value={nip}
      onChange={handleNip}
      sx={{ width: '80%' }}
     />

     <TextField
      className="mb-8"
      id="outlined-name"
      label="Password"
      type="password"
      value={password}
      onChange={handlePass}
      sx={{ width: '80%' }}

     />

     <button
      type="submit"
      onClick={__handleLogin}
      className="w-[80%] flex justify-center bg-topbar hover:bg-green-500 bg-[#546de5] p-3 rounded tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
     >
      Login
     </button>
    </div>
   </div>

  </div>
 )
}

export default Login
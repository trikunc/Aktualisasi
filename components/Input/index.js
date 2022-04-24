import { ClearOutlined, DeleteForever, Edit, Search } from '@mui/icons-material';
import {
 Divider,
 FormControl,
 IconButton,
 Input,
 InputBase,
 InputLabel,
 MenuItem,
 Paper,
 Select,
 TextField
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
export const SearchInput = ({ value, onChange, onDelete, placeholder = "Search" }) => {
 return (
  <Paper
   component="form"
   sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
  >
   <IconButton sx={{ p: '3px' }} aria-label="search">
    <Search />
   </IconButton>
   <InputBase
    value={value}
    sx={{ ml: 1, flex: 1 }}
    placeholder={placeholder}
    inputProps={{ 'aria-label': 'search google maps' }}
    onChange={onChange}
   />
   <IconButton sx={{ p: '3px' }} aria-label="search" onClick={onDelete}>
    <ClearOutlined />
   </IconButton>
  </Paper>
 );
}



export const SubMateri = ({ count, materi, cb_listMateri, cb_delSubMateri, cb_delMateri, cb_changeSubMtr, cb_changeListMtr }) => {
 console.log('materi: ', materi);
 return (
  <div className="mt-4">
   <InputLabel className="my-2 text-black" htmlFor="input_name">
    Sub Materi {count + 1}
   </InputLabel>
   <div className="flex flex-row w-full">
    <TextField
     id="input_name"
     value={materi.curriculumName}
     name="curriculumName"
     onChange={(e) => cb_changeSubMtr(e, count)}
     className="flex w-full sm:w-1/2"
    // placeholder="Nama Lengkap"
    />
    <button className="hidden sm:flex rounded p-1 ml-3 bg-red-500 text-white" onClick={() => cb_delSubMateri()}><DeleteForever /> Hapus</button>
   </div>
   <div className="flex flex-column md:flex-row w-full justify-end">
    <button className="flex sm:hidden rounded p-1 mt-2 bg-red-500 text-white" onClick={() => cb_delSubMateri()}><DeleteForever /> Hapus</button>
   </div>
   <div className="mt-5 p-3 rounded bg-dashboardcontentpage  w-full ">
    <div className="flex flex-row ">
     <div className="p-1 hidden sm:block w-1/12 text-center">
      <h3>No</h3>
     </div>
     <div className="p-1 w-10/12 text-center">
      <h3>Materi</h3>
     </div>
     {/* <div className="p-1 w-2/12 text-center">
            <h3>JP/KET</h3>
          </div> */}
     <div className="p-1 w-1/12 text-center">
      <h3>AKSI</h3>
     </div>
    </div>
    {materi.materi.map((option, index) => (
     <ListMateri key={`editKurikulum-materi-${index}`} count={index} listMateri={option} cb_delMtr={() => cb_delMateri(index)} cb_cngListMtr={(e, count) => cb_changeListMtr(e, count)} />
    ))}
    <button className="rounded p-2 mt-3 bg-lime-400" onClick={() => cb_listMateri()}>
     + Add Materi
    </button>
   </div>
  </div>
 )
}


const ListMateri = ({ count, listMateri, cb_delMtr, cb_cngListMtr }) => {
 const [jp, setJp] = useState(listMateri.jp)
 return (
  <div className="flex flex-row ">
   <div className="p-1 w-1/12 hidden sm:block">
    <TextField
     value={count + 1}
     sx={{ width: "100%" }}
     className="bg-white rounded"
     inputProps={{ min: 0, style: { textAlign: 'center' } }}
    />
   </div>
   <div className="p-1 w-10/12">
    <TextField
     value={listMateri.materiName}
     name='materiName'
     onChange={(e) => cb_cngListMtr(e, count)}
     sx={{ width: "100%" }}
     className="bg-white rounded"
    />
   </div>
   {/* <div className="p-1 w-2/12">
        <TextField
          value={listMateri.jp}
          name='jp'
          onChange={(e) => cb_cngListMtr(e, count)}
          type="number"
          sx={{ width: "100%" }}
          className="bg-white rounded"
          inputProps={{ min: 0, style: { textAlign: 'center' } }}
        />
      </div> */}

   <div className="p-1 w-1/12 flex items-center justify-center ml-2">
    <button className="rounded bg-white mx-1 p-1" onClick={() => cb_delMtr()}><DeleteForever /></button>
    {/* <button className="rounded bg-white mx-1 p-1"><Edit /></button> */}
   </div>

  </div>
 )
}

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
 'label + &': {
  marginTop: theme.spacing(3),
 },
 '& .MuiInputBase-input': {
  borderRadius: 4,
  position: 'relative',
  backgroundColor: theme.palette.background.paper,
  border: '1px solid #ced4da',
  fontSize: 16,
  padding: '4px 26px 4px 12px',
  transition: theme.transitions.create(['border-color', 'box-shadow']),
  // Use the system font instead of the default Roboto font.
  fontFamily: [
   '-apple-system',
   'BlinkMacSystemFont',
   '"Segoe UI"',
   'Roboto',
   '"Helvetica Neue"',
   'Arial',
   'sans-serif',
   '"Apple Color Emoji"',
   '"Segoe UI Emoji"',
   '"Segoe UI Symbol"',
  ].join(','),
  '&:focus': {
   borderRadius: 4,
   borderColor: '#80bdff',
   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
  },
 },
}));


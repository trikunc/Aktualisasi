import Link from 'next/link';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { AssignmentReturned, Delete, Edit } from '@mui/icons-material';
import { useContext, useState } from 'react';

import RouteName from '../../utils/RouteName';
import { useRouter } from 'next/router';


const columns = [
  { id: 'count', label: 'No', width: '5%' },

  {
    id: 'month',
    label: 'Bulan',
    align: 'center',
    alignItem: 'left',
    width: '5%'
    // width: '70%',
    // minWidth: 400,
  },
  {
    id: 'kegiatan',
    label: 'Kegiatan',
    align: 'center',
    alignItem: 'left',
    width: '20%',
    // minWidth: 400,
  },
  {
    id: 'subkegiatan',
    label: 'Sub Kegiatan',
    width: '20%',
    marginHorizontal: 5,
    align: 'center',
  },
  {
    id: 'rekening',
    label: 'Rekening',
    width: '35%',
    marginHorizontal: 5,
    align: 'center',
  },
  {
    id: 'nominal',
    label: 'Nominal',
    width: '5%',
    marginHorizontal: 5,
    align: 'center',
  },
];


export default function TableRopkControll({ data, kegiatan, subkegiatan, month }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const router = useRouter()

  let newData = data;
  for (let i = 0; i < data.length; i++) {
    if (data[i].monthId) {
      for (let j = 0; j < month.length; j++) {
        if (data[i].monthId == month[j].id) {
          newData[i] = { ...newData[i], month: month[j].name }
        }
      }
    }

    if (data[i].subkegiatanId) {
      for (let j = 0; j < subkegiatan.length; j++) {
        if (data[i].subkegiatanId == subkegiatan[j].id) {
          for (let k = 0; k < kegiatan.length; k++) {
            if (subkegiatan[j].kegiatanId == kegiatan[k].id) {
              newData[i] = { ...newData[i], kegiatan: kegiatan[k].name, subkegiatan: subkegiatan[j].name }
            }
          }
        }
      }
    }
  }


  let newData2 = [];
  for (let i = 0; i < subkegiatan.length; i++) {
    for (let j = 0; j < newData.length; j++) {
      if (subkegiatan[i].name == newData[j].subkegiatan && !newData2.find(o => o.subkegiatan === subkegiatan[i].name)) {
        let rekening = [];
        for (let k = 0; k < newData.length; k++) {
          if (subkegiatan[i].name == newData[k].subkegiatan) {
            rekening.push({
              rekening: newData[k].rekening,
              nominal: newData[k].nominal
            })
          }
        }
        newData2.push({
          subkegiatan: newData[j].subkegiatan,
          kegiatan: newData[j].kegiatan,
          month: newData[j].month,
          rekening: rekening
        })
        // console.log("newData2 ==> ", newData2)
      }
    }
  }


  let newData3 = [];
  for (let i = 0; i < kegiatan.length; i++) {
    for (let j = 0; j < newData.length; j++) {
      if (kegiatan[i].name == newData[j].kegiatan && !newData3.find(o => o.kegiatan === kegiatan[i].name)) {

        let subkegiatan = [];
        for (let k = 0; k < newData2.length; k++) {

          if (newData2[k].kegiatan == kegiatan[i].name) {
            // subkegiatan.push(newData2[k])
            subkegiatan.push({
              subkegiatan: newData2[k].subkegiatan,
              month: newData2[k].month,
              rekening: newData2[k].rekening,
            })
          }
        }
        // console.log("NEW subkegiatan ==> ", i, subkegiatan)

        newData3.push({
          kegiatan: newData[j].kegiatan,
          subkegiatan: subkegiatan
        })
      }
    }
  }


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  async function deletePost(id) {
    await fetch(`/api/ropk/${id}`, {
      method: 'DELETE',
    });
    router.push(`/admin/ControlROPK`)
  }

  const updateAsset = (id) => {
    router.push(`/admin/ropk/${id}`)
  }
  // let toStr = z.split('')
  // console.log("toStr ==", toStr)
  // console.log("toStr length ==", toStr.length)
  // let value = ""
  // let x = 0
  // for (let i = toStr.length; i > 0; i--) {

  //   if ((i + 1) % 3 == 0) {
  //     value.slice(i, ".")
  //     console.log("nomor---", i)
  //   }
  //   value.slice(0, toStr[toStr.length - i])
  //   console.log("value 333==> ", value)

  // }

  function format(x) {

    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(",");
  }



  return (
    <div>
      {newData3.map((item, index) => {
        return (
          <div key={index} className="m-4 pt-6 w-screen">
            <div className="flex justify-center font-bold text-2xl">
              Kegiatan: {item.kegiatan}
            </div>
            {item.subkegiatan.map((item2, index2) => {
              return (
                <div key={index2} className="px-14 ">
                  <div className="font-semibold text-xl border-b-2 border-black mt-4">
                    Subkegiatan: {item2.subkegiatan}
                  </div>
                  {item2.rekening.map((item3, index3) => {
                    return (
                      <div key={index3} className="flex flex-row w-full">
                        <div className="text-xl border-r-2 border-l-2 border-b-2 border-black w-[85%] px-2">
                          {item3.rekening}
                        </div>
                        <div className="text-xl border-r-2 border-b-2 border-black w-[15%] px-2 flex items-center justify-end">
                          {format(item3.nominal)}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  );
}
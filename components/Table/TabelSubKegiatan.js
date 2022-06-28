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
    id: 'kegiatan',
    label: 'Kegiatan',
    align: 'center',
    alignItem: 'left',
    width: '20%',
  },
  {
    id: 'name',
    label: 'Sub Kegiatan',
    width: '20%',
    marginHorizontal: 5,
    align: 'center',
  },
  {
    id: 'action',
    label: 'Aksi',
    width: '10%',
    marginHorizontal: 5,
    align: 'center',
  },
];


export default function TableSubKegiatan({ data, kegiatan }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  let newData = data;
  for (let i = 0; i < data.length; i++) {
    if (data[i].kegiatanId) {
      for (let j = 0; j < kegiatan.length; j++) {
        if (data[i].kegiatanId == kegiatan[j].id) {
          newData[i] = { ...newData[i], kegiatan: kegiatan[j].name }
        }
      }
    }
  }


  const router = useRouter()

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  async function deletePost(id) {
    await fetch(`/api/ropk/subkegiatan/${id}`, {
      method: 'DELETE',
    });
    router.push(`/admin/ControlROPK`)
  }

  const updateAsset = (id) => {
    router.push(`/admin/ControlROPK/addSubKegiatan/${id}`)
  }


  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ width: column.width, backgroundColor: column.bgColor }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {newData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id === 'rusak') {
                        return (
                          <TableCell key={column.id} align={column.alignItem}>
                            {row.sum - row.goodCondition}
                          </TableCell>
                        );
                      }
                      else if (column.id !== 'action') {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === 'count'
                              ? index + 1
                              : value}
                          </TableCell>
                        );
                      } else {
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            className="px-5"
                          >
                            <div className="flex flex-col items-center justify-end ">
                              <Link href="/" passHref>
                                <button onClick={() => updateAsset(row.id)} className="rounded bg-actionred p-1 w-24 border hover:bg-blue-400 hover:text-white" >
                                  <Edit sx={{ fontSize: 18 }} /> Edit
                                </button>
                              </Link>
                              <button onClick={() => deletePost(row.id)} className="rounded bg-secondaryblue p-1 w-24 mr-1 ml-1 border hover:bg-red-500 hover:text-white" >
                                <Delete sx={{ fontSize: 18 }} /> Hapus
                              </button>
                            </div>
                          </TableCell>
                        );
                      }
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={newData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
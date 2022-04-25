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
    id: 'name',
    label: 'Nama Alat',
    align: 'center',
    alignItem: 'left',
    // width: '70%',
    // minWidth: 400,
  },
  {
    id: 'brand',
    label: 'Merek Alat',
    align: 'center',
    alignItem: 'left',
    // width: '70%',
    // minWidth: 400,
  },
  {
    id: 'type',
    label: 'Tipe Alat',
    align: 'center',
    alignItem: 'left',
    // width: '70%',
    // minWidth: 400,
  },
  {
    id: 'dimension',
    label: 'Ukuran',
    align: 'center',
    alignItem: 'left',
    // width: '70%',
    // minWidth: 400,
  },
  {
    id: 'material',
    label: 'Bahan',
    align: 'center',
    alignItem: 'left',
    // width: '70%',
    // minWidth: 400,
  },
  {
    id: 'sum',
    label: 'Satuan',
    align: 'center',
    alignItem: 'left',
    // width: '70%',
    // minWidth: 400,
  },
  {
    id: 'year',
    label: 'Tahun',
    align: 'center',
    alignItem: 'left',
    // width: '70%',
    // minWidth: 400,
  },
  {
    id: 'from',
    label: 'Asal Usul',
    align: 'center',
    alignItem: 'left',
    // width: '70%',
    // minWidth: 400,
  },
  {
    id: 'goodCondition',
    label: 'Baik',
    align: 'center',
    alignItem: 'left',
    // width: '70%',
    // minWidth: 400,
  },
  {
    id: 'rusak',
    label: 'Rusak',
    align: 'center',
    alignItem: 'left',
    // width: '70%',
    // minWidth: 400,
  },
  {
    id: 'note',
    label: 'Keterangan',
    align: 'center',
    alignItem: 'left',
    // width: '70%',
    // minWidth: 400,
  },
  {
    id: 'action',
    label: 'Aksi',
    width: '10%',
    marginHorizontal: 5,
    align: 'center',
  },
];


export default function TableAsset({ data, routeTo }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const router = useRouter()

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  async function deletePost(id) {
    await fetch(`/api/asset/${id}`, {
      method: 'DELETE',
    });
    router.push(routeTo)
  }

  const updateAsset = (id) => {
    router.push(`/admin/asset/${id}`)
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
            {data
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
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
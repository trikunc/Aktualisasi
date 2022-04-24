import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Image from 'next/image';




const columns = [
  {
    id: 'count',
    label: 'No',
    width: '5%',
    align: 'center',
    alignItem: 'left',
  },

  {
    id: 'description',
    label: 'Diskripsi',
    width: '55%',
    align: 'center',
    alignItem: 'left',
  },
  {
    id: 'picture',
    label: 'Gambar',
    width: '40%',
    align: 'center',
    alignItem: 'center',
  },
];


export default function TableCuttingSticker({ data }) {



  return (
    <Paper sx={{ width: '80%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ width: column.width, backgroundColor: column.bgColor }}
                  className="font-bold"
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id === 'picture') {
                        return (
                          <TableCell key={column.id} align={column.alignItem}>
                            <Image src={row.picture} alt="" layout="responsive" />
                          </TableCell>
                        );
                      }
                      else {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === 'count'
                              ? index + 1
                              : value}{"."}
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
    </Paper>
  );
}
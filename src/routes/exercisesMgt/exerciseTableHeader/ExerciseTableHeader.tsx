import { TableCell, TableHead, TableRow } from '@mui/material';

interface TableRows {
  _id: string;
  name: string;
  muscleGroup: string;
  description: string;
  preview: string;
  createdBy: string;
  __v: string;
}

export const ExerciseTableHeader = ({
  tableRows,
}: {
  tableRows: TableRows[];
}) => {
  let columns = tableRows.map(({ _id, __v, createdBy, ...val }) => val);
  columns = Object.keys(columns[0]) as Array<any>;

  return (
    <TableHead>
      <TableRow>
        {columns.map((val) => {
          return <TableCell sx={{ textAlign: 'center' }}>{val}</TableCell>;
        })}
        <TableCell sx={{ textAlign: 'center' }}>actions</TableCell>
      </TableRow>
    </TableHead>
  );
};

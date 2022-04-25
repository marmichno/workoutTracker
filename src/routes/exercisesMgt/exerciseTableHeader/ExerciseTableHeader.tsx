import { TableCell, TableHead, TableRow } from '@mui/material';

interface TableRows {
  name: string;
  muscleGroup: string;
  description: string;
  preview: string;
}

export const ExerciseTableHeader = ({
  tableRows,
}: {
  tableRows: TableRows[];
}) => {
  console.log(tableRows);
  const columns = Object.keys(tableRows[0]) as Array<any>;

  return (
    <TableHead>
      <TableRow>
        {columns.map((val) => {
          return <TableCell>{val.toUpperCase()}</TableCell>;
        })}
      </TableRow>
    </TableHead>
  );
};

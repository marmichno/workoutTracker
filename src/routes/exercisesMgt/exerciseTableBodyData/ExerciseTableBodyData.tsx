import { TableBody } from '@mui/material';
// styled
import {
  StyledExerciseTableRow,
  StyledExerciseTableCell,
} from './StyledExerciseTableBodyData';
// redux
import { useAppSelector } from '../../../hooks/hooks';
import { useDispatch } from 'react-redux';
// actions
import { exercisesDeletePopup } from '../../../redux/actions/exercises/exercisesManagement/exerciseManagement';
import { exercisesModifyPopup } from '../../../redux/actions/exercises/exercisesManagement/exerciseManagement';
// icons
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
// components
import { DeleteExercisePopup } from './deleteExercisePopup/DeleteExercisePopup';

interface TableRows {
  _id: string;
  createdBy: string;
  name: string;
  muscleGroup: string;
  description: string;
  preview: string;
  __v: string;
}

export const ExerciseTableBodyData = ({
  tableRows,
}: {
  tableRows: TableRows[];
}) => {
  const dispatch: any = useDispatch();
  const managementState = useAppSelector((state) => state.exercisesManagement);

  return (
    <>
      <TableBody>
        {tableRows.map((val) => {
          return (
            <StyledExerciseTableRow>
              <StyledExerciseTableCell>{val.name}</StyledExerciseTableCell>
              <StyledExerciseTableCell>
                {val.muscleGroup}
              </StyledExerciseTableCell>
              <StyledExerciseTableCell>
                {val.description}
              </StyledExerciseTableCell>
              <StyledExerciseTableCell>{val.preview}</StyledExerciseTableCell>
              <StyledExerciseTableCell>
                <DeleteForeverIcon
                  onClick={() =>
                    dispatch(exercisesDeletePopup(true, val._id, val.name))
                  }
                />
                <EditIcon
                  onClick={() =>
                    dispatch(
                      exercisesModifyPopup(
                        true,
                        val._id,
                        val.name,
                        val.muscleGroup,
                        val.description,
                        val.preview
                      )
                    )
                  }
                />
              </StyledExerciseTableCell>
            </StyledExerciseTableRow>
          );
        })}
        {managementState.popupDelete.open && <DeleteExercisePopup />}
      </TableBody>
    </>
  );
};

import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/hooks';
import { useEffect } from 'react';
import { fetchExercises } from '../../redux/actions/exercises/exercisesActions';

export const UserDashboard = () => {
  const dispatch: any = useDispatch();
  const exercises = useAppSelector((state) => state.exercises);

  useEffect(() => {
    dispatch(fetchExercises());
  }, []);

  return (
    <div>
      <h1>user dashboard</h1>
    </div>
  );
};

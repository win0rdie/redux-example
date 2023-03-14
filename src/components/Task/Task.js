import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTaskById } from 'redux/actions';

import css from './Task.module.css';

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const deleteTask = () => dispatch(deleteTaskById(task.id));
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={deleteTask}>
        <MdClose size={24} />
      </button>
    </div>
  );
};

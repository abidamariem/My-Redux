// components/Task.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, removeTask,editTask,toggleDone} from '../Redux/actions';


const Task = ({ task }) => {
 const [isEditing, setIsEditing] = useState(false);
 const [isDone, setIsDone] = useState(false);

 const [editedDescription, setEditedDescription] = useState(task.description);
 const dispatch = useDispatch();


 const handleToggle = () => {
    dispatch(toggleTask(task.id));
 };

 const handleEdit = () => {
  setIsEditing(!isEditing);
  dispatch(editTask(task.id, editedDescription));
 };

 const handleDelete = () => {
    dispatch(removeTask(task.id));
 };
 const handleToggleDone = () => {
  setIsDone(!isDone);

  dispatch(toggleDone(task.id));
};

 return (
  <div>
    <div className="task">
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggle}
      />
      {isEditing ? (
        <input
          type="text"
          className="form-control"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
      ) : (
        <h1 style={isDone===true?{color:'green'}:{color:'red'}}>{task.description}</h1>
      )}
      {
        isEditing ?<button className="btn btn-secondary" onClick={()=>handleEdit() }>
        save
      </button> : <button className="btn btn-secondary" onClick={()=>handleEdit() }>
        Edit
      </button>
      }
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
      </div>
      <div>
      <h3>{task.title}</h3>
      <button onClick={handleToggleDone}>
        {isDone ? 'Mark as Not Done' : 'Mark as Done'}
      </button>
    </div>
    </div>
 );
};

export default Task;
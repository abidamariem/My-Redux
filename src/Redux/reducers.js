import { combineReducers } from 'redux';

const tasksReducer = (state = [], action) => {
 switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
      case 'EDIT_TASK':
        return state.map((task) =>
           task.id === action.payload.id ? { ...task, description: action.payload.description } : task
        );
    case 'TOGGLE_TASK':
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, isDone: !task.isDone } : task
      );
    case 'REMOVE_TASK':
      return state.filter((task) => task.id !== action.payload.id);
      case 'FILTER_TASKS':
        case 'TOGGLE_DONE':
          return state.map((task) =>
            task.id === action.payload ? { ...task, isDone: !task.isDone } : task
          );
    default:
      return state;
 }
}
 

const rootReducer = combineReducers({tasks: tasksReducer,
});

export default rootReducer;
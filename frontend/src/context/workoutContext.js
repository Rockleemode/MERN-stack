import { createContext, useReducer } from "react";

export const WorkoutContext = createContext()

const workoutReducer = (state, action) =>{
  switch (action.type){
    case "CREATE_WORKOUT":
      return {workouts: [action.payload, ...state.workouts]}
    case "SET_WORKOUTS":
      return {workouts: action.payload}
    case "DELETE_WORKOUT":
      return {workouts:state.workouts.filter((w) => w._id !== action.payload._id)}
    default:
  }
}

const WorkoutContextProvider = ({children}) => {

  const [state, dispatch] = useReducer(workoutReducer,{
    workouts:null
  } )
    return ( 
      <WorkoutContext.Provider value={{...state, dispatch}}>
        {children}
      </WorkoutContext.Provider>
     );
}
 
export default WorkoutContextProvider;
import useAuth from "./useAuth";
import useWorkout from "./useWorkout";

const useLogout = () => {

    const { dispatch } = useAuth();
    const { dispatch : workoutDispatch } = useWorkout();
    const logout = () =>{
        localStorage.removeItem("user");
        dispatch({type:"LOGOUT"})
        workoutDispatch({type:"SET_WORKOUTS", payload:null})
    }

    return {logout};
}
 
export default useLogout;
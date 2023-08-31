import { useContext } from "react";
import { WorkoutContext } from "../context/workoutContext";

const useWorkout = () => {
    const context = useContext(WorkoutContext);

    return context;
}
 
export default useWorkout;

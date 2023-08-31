import { useEffect} from "react";
import WorkoutDetails from "./WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import useWorkout from "../hooks/useWorkout";

     
const Home = () => {
    const {workouts, dispatch} = useWorkout();
    useEffect(() =>{
        const fetchWorkouts = async () =>{
            const response = await fetch("/api/workouts/");
            const data = await response.json()

            if(response.ok){
                 dispatch({type:"SET_WORKOUTS", payload:data})
            }
        }  
        fetchWorkouts();
    },[])
    return ( 
        <div className="home">
            <div className="workouts">
            {workouts && workouts.map((workout) =>(
                <WorkoutDetails key={workout._id} workout={workout}/>
            ))}
            </div>
            <WorkoutForm />
        </div>
     );
}
 
export default Home;
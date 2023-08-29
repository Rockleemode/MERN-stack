import { useEffect, useState } from "react";
import WorkoutDetails from "./WorkoutDetails";
     
const Home = () => {
    const [workouts, setWorkouts] = useState(null);
    useEffect(() =>{
        const fetchWorkouts = async () =>{
            const response = await fetch("/api/workouts/");
            const data = await response.json()

            if(response.ok){
            setWorkouts(data)
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
        </div>
     );
}
 
export default Home;
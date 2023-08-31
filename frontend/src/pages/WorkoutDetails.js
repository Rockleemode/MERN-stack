import useWorkout from "../hooks/useWorkout";
import deletebtn from "../icons/delete.svg";

const WorkoutDetails = ({ workout }) => {

    const {dispatch} = useWorkout();

    const handleClick = async() =>{
        const response = await fetch(`/api/workouts/${workout._id}`, {
            method:"DELETE",
            Headers:{"Content-Type":"application/json"}
        })
        if(response.ok){
            const data = await response.json()
            dispatch({type:"DELETE_WORKOUT", payload:data})
        }
    }
    return ( 
        <div className="workout-details">
            <h3>{workout.title}</h3>
            <p><b>reps:</b>{workout.reps}</p>
            <p><strong>load(kg):</strong>{workout.load}</p>
            <span onClick={handleClick}><img src={deletebtn} alt="trash icon"/></span>
        </div>
     );
}
 
export default WorkoutDetails;
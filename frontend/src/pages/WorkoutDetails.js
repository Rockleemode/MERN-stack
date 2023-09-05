import useAuth from "../hooks/useAuth";
import useWorkout from "../hooks/useWorkout";
import deletebtn from "../icons/delete.svg";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {

    const {dispatch} = useWorkout();
    const { user } = useAuth();
    
    const handleClick = async() =>{
        if(!user){
            return;
        }

        const response = await fetch(`/api/workouts/${workout._id}`, {
            method:"DELETE",
            headers:{"Content-Type":"application/json", "Authorization":`Bearer ${user.token}`
        }
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
            <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix:true})}</p>
            <span onClick={handleClick}><img src={deletebtn} alt="trash icon"/></span>
        </div>
     );
}
 
export default WorkoutDetails;
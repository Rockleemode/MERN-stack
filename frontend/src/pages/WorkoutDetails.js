const WorkoutDetails = ({ workout }) => {
    return ( 
        <div className="workout-details">
            <h3>{workout.title}</h3>
            <p><b>reps:</b>{workout.reps}</p>
            <p><strong>load(kg):</strong>{workout.load}</p>

        </div>
     );
}
 
export default WorkoutDetails;
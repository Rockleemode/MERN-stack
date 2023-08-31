import { useState } from "react";
import useWorkout from "../hooks/useWorkout";


const WorkoutForm = () => {
    const {dispatch} = useWorkout();

    const [title, setTitle] = useState("")    
    const [reps, setReps] = useState("")
    const [load, setLoad] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = async (e) =>{
        try{
        e.preventDefault()

        const response = await fetch("/api/workouts",
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({title, reps, load})
        })
        const data = await response.json()
        if(response.ok){
            dispatch({type:"CREATE_WORKOUT", payload:data})
        }else{
            setError(data.error)
           throw new Error("some type of error")
        }
        setTitle("");
        setReps("");
        setLoad("");
    }
    catch(error){
        console.error("there is an error:", error.message)
    }
    }
    return ( 
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" name="title" value={title} onChange={(e)=> setTitle(e.target.value)} id="title" /><br/>
                <label>Reps:</label>
                <input type="text" name="reps" value={reps} onChange={(e)=> setReps(e.target.value)} id="title" /><br/>
                <label>Load(kg):</label>
                <input type="text" name="load" value={load} onChange={(e) => setLoad(e.target.value)} id="title" /><br/>
                <button type="submit">submit</button>
            </form>
            {error && <div>{error}</div>}
        </div>
     );
}
 
export default WorkoutForm;
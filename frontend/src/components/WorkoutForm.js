import { useState } from "react";
import useWorkout from "../hooks/useWorkout";
import useAuth from "../hooks/useAuth";

const WorkoutForm = () => {
  const { dispatch } = useWorkout();
  const { user } = useAuth();

  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!user) {  
        setError("user must be logged in");
        return;
      }

      const response = await fetch("/api/workouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ title, reps, load }),
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: "CREATE_WORKOUT", payload: data });
        setError("");
        setTitle("");
        setReps("");
        setLoad("");
      }
      if (!response.ok) {
        console.log(data.error);
        setError(data.error);
      }
    } catch (error) {
      console.error("there is an error:", error.message);
      setError("an error occured, please try again in few mins");
    }
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="title"
        />
        <br />
        <label htmlFor="reps">Reps:</label>
        <input
          type="text"
          name="reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          id="reps"
        />
        <br />
        <label htmlFor="load">Load(kg):</label>
        <input
          type="text"
          name="load"
          value={load}
          onChange={(e) => setLoad(e.target.value)}
          id="load"
        />
        <br />
        <button type="submit">submit</button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default WorkoutForm;

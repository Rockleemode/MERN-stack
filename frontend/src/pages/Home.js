import { useEffect } from "react";
import WorkoutDetails from "./WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import useWorkout from "../hooks/useWorkout";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { workouts, dispatch } = useWorkout();
  const { user } = useAuth();

  useEffect(() => {
    const fetchWorkouts = async () => {
        const response = await fetch("/api/workouts/", {
          headers: {"Authorization":`Bearer ${user.token}`},
        });
        const data = await response.json();

        if (response.ok) {
          dispatch({ type: "SET_WORKOUTS", payload: data });
        }
      }
      if(user){
        fetchWorkouts();    
      } 
  }, [dispatch, user]);
  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;

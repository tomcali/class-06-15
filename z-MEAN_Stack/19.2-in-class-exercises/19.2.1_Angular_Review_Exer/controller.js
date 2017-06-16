angular.module('workoutApp', [])
  .controller('WorkoutListController', function() {
    var workoutList = this;
    workoutList.exerciseGroups = ["Chest", "Back", "Shoulders", "Legs", "Arms"];
    workoutList.workout = [];

    workoutList.addWorkout = function() {
      workoutList.workout.push({
        muscleGroup: workoutList.exercise.muscleGroup,
        exercise: workoutList.exercise.name,
        date: workoutList.exercise.date,
        weight: workoutList.exercise.weight,
        reps: workoutList.exercise.reps,
      });
      console.log(workoutList.workout);
      workoutList.exercise = {};
    };

  });

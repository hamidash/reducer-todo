export const initialState = {
  tasks: [
    {
      item: "Learn reducer",
      completed: false,
      id: 3892987589,
    },
  ],
};

export const Add_Task = "Add_Task";

export const Complete_Task = "Complete_Task";

export const Clear_Task = "Clear_Task";

export const reducer = (state, action) => {
  switch (action.type) {
    case Add_Task: {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            item: action.payload,
            completed: false,
            id: Date.now(),
          },
        ],
      };
    }
    case Complete_Task: {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id == action.payload) {
            return {
              ...task,
              completed: !task.completed,
            };
          }
          return task;
        }),
      };
    }
    case Clear_Task: {
      return {
        ...state,
        tasks: state.tasks.filter((task) => {
          return task.completed === false;
        }),
      };
    }
    default:
      return state;
  }
};

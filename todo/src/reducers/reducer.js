
 export const initialState = {
     tasks: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589 
     }]
 }



 export const ADD = 'ADD';
 export const TOGGLE = "TOGGLE";
 export const CLEAR = 'CLEAR';


const reducer = (state, action) => {
    switch(action.type){
        case ADD:
            console.log(state)
            console.log(action)
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        item: action.payload,
                        completed: false,
                        id: Date.now()
                    }
                ]
            }

        case TOGGLE:
           
            return {
                ...state,
                tasks: state.tasks.map((task)=>{
                    if(task.id === action.payload) {
                        return {
                            ...task,
                            completed: !task.completed,
                        }
                    }
                    return task;
                })
            }

        case CLEAR:

            return {
                tasks: state.tasks.filter((task) => {
                    return task.completed === false;
                })
            }

        default:
            return state
    }
}

export default reducer;
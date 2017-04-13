export default function Reducers(state={
    user:{},
    fetching:false,
}, action){
    switch (action.type){

        case "USERDETAILS":
        {
            return {...state, fetching: action.payload}
        }

        default: return state;

    }
    return state;
}
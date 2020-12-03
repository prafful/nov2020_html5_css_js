const reducerFriendClicked = function createReducerFriendClicked(state = null, action){

    console.log("Value of state in reducer friend clicked: ")
    console.log(state)
    console.log("Value of action in reducer friend clicked: ")
    console.log(action)
    
    switch (action.type) {
        case "FRIEND_CLICKED":
            return action.payload
            break;
    
        default:
            break;
    }

    return state


}

export default reducerFriendClicked
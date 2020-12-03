const friendClickedAction = function(friend){
    console.log("Clicked friend received in action broadcast....");
    console.log(friend)
    console.log("Broadcast clicked friend.... so reducers can capture the same....")
    return {
        type: "FRIEND_CLICKED",
        payload: friend
    }
}

export default friendClickedAction
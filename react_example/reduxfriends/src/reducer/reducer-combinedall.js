import { combineReducers } from "redux";

import reducerAllFriends from "./reducer-allfriends";
import reducerDetail from "./reducer-details";
import reducerFriendLikes from "./reducer-friendlikes";




const allReducerCombined = combineReducers({
    allfriends: reducerAllFriends,
    detail: reducerDetail,
    likes: reducerFriendLikes,

})


export default allReducerCombined


import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import friendClickedAction from '../action/action-friendclicked';
import Friend from './friend'

class FriendList extends React.Component {

    displayAllFriends=()=>{
        return this.props.friends.map(friend=>{
            return (
                <Friend 
                    key={friend.id}
                    id={friend.id}
                    name={friend.name}
                    friendClickedId={this.getIdOfFriendClicked}
                    >

                </Friend>
            )
        })
    }

    getIdOfFriendClicked=(id)=>{
        console.log("Received id of friend clicked: " + id)
        //find friend with given id from this.props.friends
        var friendWithClickedId = this.props.friends.find(f =>{
            return f.id === id
        })
        console.log("Below friend is clicked: ")
        console.log(friendWithClickedId)
        this.props.prepareClickedFriendForBroadcast(friendWithClickedId)

    }
    
    render() { 
        return ( 
            <div>
                <div>
                    <b>Friend list....</b>
                </div>
                <div>
                    {this.displayAllFriends()}
                </div>
              
            </div>
         );
    }
}
 
function convertStoreToPropsForFriendList(store){
    console.log("Received store in friendlist")
    console.log(store)
    return{
        friends: store.allfriends
    }
}

function convertEventToPropsForFriendListAndDispatch(dispatch){
    return bindActionCreators({
        prepareClickedFriendForBroadcast: friendClickedAction 
    }, dispatch)
}

export default   connect(convertStoreToPropsForFriendList, convertEventToPropsForFriendListAndDispatch)(FriendList)
import React from 'react'
import { connect } from 'react-redux';
import Friend from './friend'

class FriendList extends React.Component {

    displayAllFriends=()=>{
        return this.props.friends.map(friend=>{
            return (
                <Friend 
                    key={friend.id}
                    name={friend.name}
                    >

                </Friend>
            )
        })
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
    console.log(store)
    return{
        friends: store.allfriends
    }
}

export default   connect(convertStoreToPropsForFriendList)(FriendList)
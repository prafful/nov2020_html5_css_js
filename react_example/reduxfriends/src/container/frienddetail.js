import React from 'react'
import { connect } from 'react-redux';

class FriendDetail extends React.Component {
    

    getFriendDetails =()=>{
        var frienddetail = this.props.detail.find(f=>{
            return f.id === this.props.friendclicked.id
        })
        var friendlikes = this.props.likes.find(f=>{
            return f.id === this.props.friendclicked.id
        })

        return(
            <div>
                    <br></br>
                    <b>Name:</b> {this.props.friendclicked.name}
                    <br></br>
                    <b>Location:</b> {frienddetail.location}
                    <br></br>
                    <b>Other Friends Count:</b> {frienddetail.otherFriendsCount}
                    <br></br>
                    <b>Friend Since:</b> {frienddetail.friendsince} years
                    <br></br>
                    <b>Likes:</b> {friendlikes.likes} 
            </div>
        )
    }


    render() { 
        if(this.props.friendclicked === null){
            return(
                <div>
                    <b>Click on any friend to read more....</b> 
                 </div>

            )
        }else{
            return ( 
            <div>
              {this.getFriendDetails()}
            </div>
         )
        }
        
    }
}

function convertStoreToPropsForFriendDetail(store){
    console.log("Received store in Friend Detail....")
    console.log(store)
    return {
        friends: store.allfriends,
        detail: store.detail,
        friendclicked: store.friendclicked,
        likes: store.likes
    }
}
 
export default connect(convertStoreToPropsForFriendDetail, null)(FriendDetail)
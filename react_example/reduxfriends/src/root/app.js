import React from 'react';
import FriendDetail from '../container/frienddetail';
import FriendList from '../container/friendlist';
import FriendLikes from '../container/likes';

class RootComponent extends React.Component {
   
    render() { 
        return ( 
            <div>
                <h1>Root Component!</h1>
                <FriendList></FriendList>
                <hr></hr>
                <FriendDetail></FriendDetail>
                <hr></hr>
                <FriendLikes></FriendLikes>
            </div>
         );
    }
}
 
export default RootComponent;
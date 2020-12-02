import React from 'react'

class FriendDetail extends React.Component {
    
    render() { 
        return ( 
            <div>
                <div>
                   <b>Click on any friend to read more....</b> 
                </div>
                <br></br>
               <b>Name:</b> friend name
               <br></br>
               <b>Location:</b> friend location
               <br></br>
               <b>Likes:</b> 8
               <br></br>
            </div>
         );
    }
}
 
export default FriendDetail;
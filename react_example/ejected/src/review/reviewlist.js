import React from 'react';
import Review from './review';


class ReviewList extends React.Component {
    
    render() { 
        return ( 
            <div>
                <h3>List of reviews!</h3>
                <Review likes="88" dislikes="9">LG 8x ThinQ</Review>
                <Review likes="80" dislikes="7">Samsung Note 20 Pro 5G</Review>
                <Review likes="70" dislikes="10">Sony Xperia 5</Review>
                <Review likes="100" dislikes="0">Nokia 1120</Review>
            </div>
         );
    }
}
 
export default ReviewList;
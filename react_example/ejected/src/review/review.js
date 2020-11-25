import React from 'react';
import ReviewAction from './reviewaction';
import ReviewDescription from './reviewdescription';
import ReviewTitle from './reviewtitle';


class Review extends React.Component {

    title = this.props.children
    likes = this.props.likes
    
    render() { 
        return ( 
            <div>
                <ReviewTitle mytitle={this.title}></ReviewTitle>
                <br></br>
                <ReviewDescription></ReviewDescription>
                <br></br>
                <ReviewAction mylike={this.props.likes} mydislike={this.props.dislikes}></ReviewAction>
                <hr></hr>
            </div>
         );
    }
}
 
export default Review;
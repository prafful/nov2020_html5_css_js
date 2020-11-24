import React from 'react';


class ReviewTitle extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
               <b>{this.props.mytitle}</b>
            </div>
         );
    }
}
 
export default ReviewTitle;
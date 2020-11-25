import React from 'react';


class ReviewAction extends React.Component {

    like = this.props.mylike
    dislike = this.props.mydislike
   
    render() { 
        return ( 
            <div>
                <button>Like {this.like} </button>
                &nbsp;
                <button>Dislike {this.dislike} </button>
            </div> 
        )
    }
}
 
export default ReviewAction;
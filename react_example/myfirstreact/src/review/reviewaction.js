import React from 'react';


class ReviewAction extends React.Component {

    constructor(props){
       super(props) 
       this.state = {
           like: parseInt(this.props.mylike),
           dislike: parseInt(this.props.mydislike)
       }

    }

    //like = this.props.mylike
    //dislike = this.props.mydislike

    addLikes = ()=>{
        console.log(this.state.like)
        //uncorrect way!
        //this.state.like++
        this.setState({like: this.state.like+1})
        console.log(this.state.like)
    }

    removeLikes = ()=>{
        console.log(this.state.dislike)
        //uncorrect way!
        //this.state.dislike++
        this.setState({dislike: this.state.dislike+1})
        console.log(this.state.dislike)
    }
   
    render() { 
        return ( 
            <div>
                <button onClick={this.addLikes}>Like {this.state.like} </button>
                &nbsp;
                <button onClick={this.removeLikes}>Dislike {this.state.dislike} </button>
            </div> 
        )
    }
}
 
export default ReviewAction;
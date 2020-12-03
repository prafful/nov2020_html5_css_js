import React from 'react'

class Friend extends React.Component {

    friendClicked = ()=>{
        console.log("Friend clicked with id: " + this.props.id)
        this.props.friendClickedId(this.props.id)
    }
    
    render() { 
        return ( 
            <div>
                <span onClick={this.friendClicked}>{this.props.id}. {this.props.name}</span>
                <button>8</button>
            </div>
         );
    }
}
 
export default Friend;
import React from 'react'

class Friend extends React.Component {
    
    render() { 
        return ( 
            <div>
                {this.props.name}
                <button>8</button>
            </div>
         );
    }
}
 
export default Friend;
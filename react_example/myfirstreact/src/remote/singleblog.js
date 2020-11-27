import React from 'react';

class SingleBlog extends React.Component {
    
    render() { 
        return (
            <tr>
                <td>{this.props.myid}</td>
                <td>{this.props.mytitle}</td>
          
            </tr>
          );
    }
}
 
export default SingleBlog
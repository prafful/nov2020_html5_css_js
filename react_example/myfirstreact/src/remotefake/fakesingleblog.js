import React from 'react';

class FakeSingleBlog extends React.Component {
    
    render() { 
        return (
            <tr>
                <td>{this.props.myid}</td>
                <td>{this.props.mytitle}</td>
                <td>
                    <button>Edit</button>
                </td>
                <td>
                    <button>Delete</button>
                </td>
                <td>
                    <button>View Details</button>
                </td>
            </tr>
          );
    }
}
 
export default FakeSingleBlog
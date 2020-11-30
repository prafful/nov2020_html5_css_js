import React from 'react';

class FakeSingleBlog extends React.Component {

    captureIdForDelete=()=>{
        console.log(this.props.myid)
        this.props.receiveId(this.props.myid)
    }
    
    render() { 
        return (
            <tr>
                <td>{this.props.myid}</td>
                <td>{this.props.mytitle}</td>
                <td>
                    <button>Edit</button>
                </td>
                <td>
                    <button onClick={this.captureIdForDelete}>Delete</button>
                </td>
                <td>
                    <button>View Details</button>
                </td>
            </tr>
          );
    }
}
 
export default FakeSingleBlog
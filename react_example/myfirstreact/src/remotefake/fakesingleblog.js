import React from 'react';

class FakeSingleBlog extends React.Component {

    captureIdForDelete=()=>{
        console.log("For delete: " + this.props.myid)
        this.props.receiveIdForDelete(this.props.myid)
    }

    captureIdForEdit=()=>{
        console.log("For edit: " + this.props.myid)
        this.props.receiveIdForEdit(this.props.myid)
    }

    captureIdForDetails=()=>{
        console.log("For details: " + this.props.myid)
        this.props.receiveIdForDetails(this.props.myid)
    }
    
    render() { 
        return (
            <tr>
                <td>{this.props.myid}</td>
                <td>{this.props.mytitle}</td>
                <td>
                    <button onClick={this.captureIdForEdit}>Edit</button>
                </td>
                <td>
                    <button onClick={this.captureIdForDelete}>Delete</button>
                </td>
                <td>
                    <button onClick={this.captureIdForDetails}>View Details</button>
                </td>
            </tr>
          );
    }
}
 
export default FakeSingleBlog
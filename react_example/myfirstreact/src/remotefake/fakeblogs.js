import React from 'react'
import axios from "axios"
import FakeSingleBlog from './fakesingleblog'


class FakeBlogs extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            posts: [],
            displayAddBlogStatus: false,
            newBlogTitle:"",
            newBlogDescription:"",
            newBlogUserId: 0,
            editBlogId: 0
           
        }
    }
    
    componentWillMount(){
        this.getBlogs()
    }

    getBlogs = ()=>{
        axios.get("http://localhost:1234/blogs")
                .then(response=>{
                    console.log(response)
                    console.log(response.data)
                    this.setState({posts: response.data})
                    console.log(this.state.posts)
                })
                .catch(error=>{
                    console.log(error)
                })
    }

    renderBlogs =()=>{
        return (
            this.state.posts.map(post=>{
                return(
                    <FakeSingleBlog
                            myid={post.id}
                            mytitle = {post.title}
                            receiveIdForDelete = {this.deleteBlog}
                            receiveIdForEdit = {this.editBlog}
                    >

                    </FakeSingleBlog>
                )
            })
        )
    }

    editBlog =(id)=>{
        this.setState({
            editBlogId: id
        })
        console.log("Received id from child component for edit: " + id)
        axios.get("http://localhost:1234/blogs" + "/" + id)
            .then(response=>{
                console.log(response)
                this.setState({
                    newBlogUserId: response.data.userId,
                    newBlogTitle: response.data.title,
                    newBlogDescription: response.data.body
                })
            })
            .catch(error=>{
                console.log(error)
            })
    }

    deleteBlog=(id)=>{
        console.log("Received id from child component for delete: " + id);
        axios.delete("http://localhost:1234/blogs" + "/" + id)
                .then(response=>{
                    console.log(response)
                    this.getBlogs()

                })
                .catch(error=>{
                    console.log(error)
                })
    }


    addBlog =(event)=>{

        event.preventDefault()

        var blogItem = {
                "userId": this.state.newBlogUserId,
                "title": this.state.newBlogTitle,
                "body": this.state.newBlogDescription,
            }
        axios.post("http://localhost:1234/blogs", blogItem)
                .then(response=>{
                    console.log(response)
                    this.getBlogs()
                    this.toggleDisplayAddBlog()
                    this.setState({
                        newBlogTitle:"",
                        newBlogDescription:"",
                        newBlogUserId: 0
                    })
                })
                .catch(error=>{
                    console.log(error)
                })
    }

    toggleDisplayAddBlog = ()=>{
        this.setState({
            displayAddBlogStatus: !this.state.displayAddBlogStatus
        })
    }

    captureTitle =(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({
            newBlogTitle: event.target.value
        })
    }

    captureDescription=(event)=>{
        console.log(event.target.value)
        this.setState({
            newBlogDescription: event.target.value
        })
    }

    captureUserId =(event)=>{
        console.log(event.target.value)
        this.setState({
            newBlogUserId: event.target.value
        })
    }

    cancelAddBlog=()=>{
        this.toggleDisplayAddBlog()
        this.setState({
            newBlogTitle:"",
            newBlogDescription:"",
            newBlogUserId: 0
        })
    }

    displayAddBlog =()=>{
        if(this.state.displayAddBlogStatus){
            return (
                <div>
                  <form>
                      User Id: 
                      <input type="text" onChange={this.captureUserId}></input>
                      <br></br>
                      Title: 
                      <input type="text" onChange={this.captureTitle}></input>
                      <br></br>
                      Description: 
                      <textarea onChange={this.captureDescription}></textarea>
                      <br></br>
                      <button onClick={this.addBlog}>Add</button>
                      &nbsp;
                      <button onClick={this.cancelAddBlog}>Cancel</button>
                  </form>
                </div>
            )
        }
    
    }

    editBlogWithId =(event)=>{
        event.preventDefault()
        var tempEditBlog={
            title:this.state.newBlogTitle,
            body:this.state.newBlogDescription,
            userId: this.state.newBlogUserId
        }
        console.log(tempEditBlog)
        axios.put("http://localhost:1234/blogs" + "/" + this.state.editBlogId, tempEditBlog)
            .then(response=>{
                console.log(response)
                this.getBlogs()
                this.setState({
                    newBlogTitle:"",
                    newBlogDescription:"",
                    newBlogUserId: 0
                })
            })
            .catch(error=>{
                console.log(error)
            })
    }

    cancelEditBlog=()=>{
        this.setState({
            editBlogId:0
        })
    }    


    displayEditBlog=()=>{
        if(this.state.editBlogId != 0 ){
            return (
                <div>
                    <form>
                      Id: <input type="text" readOnly value={this.state.editBlogId}></input>
                      <br></br>
                      User Id: 
                      <input type="text" value={this.state.newBlogUserId} readOnly></input>
                      <br></br>
                      Title: 
                      <input type="text" onChange={this.captureTitle} value={this.state.newBlogTitle}></input>
                      <br></br>
                      Description: 
                      <textarea onChange={this.captureDescription} value={this.state.newBlogDescription}></textarea>
                      <br></br>
                      <button onClick={this.editBlogWithId}>Update</button>
                      &nbsp;
                      <button onClick={this.cancelEditBlog}>Cancel</button>
                  </form>
                </div>
            )
        }
    }

    render() { 
        return (  
            <div>
                <hr></hr>
                <h1>List of blogs...</h1>
                <button onClick={this.toggleDisplayAddBlog}>Add Blog....</button>
                <br></br>
                <br></br>
                {this.displayAddBlog()}
                <br></br>
                <br></br>
                {this.displayEditBlog()}
                <br></br>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Blog Title</th>
                            <th colSpan="3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderBlogs()}
                    </tbody>
                    
                </table>
            </div>
        );
    }
}
 
export default FakeBlogs;
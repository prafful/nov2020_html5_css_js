import React from 'react'
import axios from "axios";
import SingleBlog from './fakesingleblog';


class FakeBlogs extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            posts: []
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
                    <SingleBlog
                            myid={post.id}
                            mytitle = {post.title}
                    >

                    </SingleBlog>
                )
            })
        )
    }

    render() { 
        return (  
            <div>
                <hr></hr>
                <h1>List of blogs...</h1>
                <button>Add Blog....</button>
                <br></br>
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
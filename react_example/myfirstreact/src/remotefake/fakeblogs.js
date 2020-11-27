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

    addBlog =()=>{
        var blogItem = {
                "userId": 4,
                "title": "triple screen mobiles",
                "body": "LG 9x thinq and lg velvet v90 come with folding triple screen support!",
            }
        axios.post("http://localhost:1234/blogs", blogItem)
                .then(response=>{
                    console.log(response)
                    this.getBlogs()
                })
                .catch(error=>{
                    console.log(error);
                })
    }

    render() { 
        return (  
            <div>
                <hr></hr>
                <h1>List of blogs...</h1>
                <button onClick={this.addBlog}>Add Blog....</button>
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
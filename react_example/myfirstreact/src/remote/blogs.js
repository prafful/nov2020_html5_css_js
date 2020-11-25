import React from 'react'
import axios from "axios";


class Blogs extends React.Component {

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
        axios.get("http://jsonplaceholder.typicode.com/posts")
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
                    <div>
                    {post.id}. {post.title}
                    </div>
                )
            })
        )
    }

    render() { 
        return (  
            <div>
                <h1>List of blogs...</h1>
                {this.renderBlogs()}
            </div>
        );
    }
}
 
export default Blogs;
import React from 'react'
import axios from "axios";
import SingleBlog from './singleblog';


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
                <h1>List of blogs...</h1>
                <table border="1">
                    <thead>
                        <tr>
                            <th>
                                Id
                            </th>
                            <th>
                                Blog Item
                            </th>
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
 
export default Blogs;
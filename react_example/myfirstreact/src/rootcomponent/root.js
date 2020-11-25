import React from "react"

import ReviewList from "../review/reviewlist"



class ChennaiRootComponent extends React.Component{

    applyNow = {
        color:"blue",
        border:"1px solid red",
        borderRadius:"10px",
        backgroundColor:"orange",
        paddingLeft: "5px"

    }

    name = "Prafful Daga"

    welcome = function(){
        return "I am function called from JSX!"
    }

    render(){
        return (
            <div>
                <h1 style={
                            {
                                color:"red",
                                backgroundColor: "lightblue"
                            }
                        }
                            >
                            I am JSX!!!! in root component!
                </h1>
                <p style={this.applyNow}>Name: {this.name}</p>
                {this.welcome()}
                <hr></hr>
                <ReviewList></ReviewList>
               
            </div>
        )
    }

}


export default ChennaiRootComponent


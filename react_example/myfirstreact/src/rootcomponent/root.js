import React from "react"



class ChennaiRootComponent extends React.Component{

    name = "Prafful Daga"

    welcome = function(){
        return "I am function called from JSX!"
    }

    render(){
        return (
            <div>
                <h1>I am JSX!!!! in root component!</h1>
                <p>Name: {this.name}</p>
                {this.welcome()}
            </div>
        )
    }

}


export default ChennaiRootComponent


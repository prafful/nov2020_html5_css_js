import React from 'react'
import ReactDOM from "react-dom";

class LifeCycle extends React.Component {
    
    constructor(props){
        super(props)
        this.state ={
            counter: 10
        }
    }

    componentWillMount(){
        console.log("component will mount")
     
    }

    componentDidMount(){
        console.log("component has mounted")
    }

    componentWillUpdate(){
        console.log("component will update")
       
    }

    componentDidUpdate(){
        console.log("component has updated")
    }

    componentWillUnmount(){
        console.log("component is unmounted")
    }

    updateCounter =()=>{
        this.setState({counter: this.state.counter+1})
    }

    removeSelf =()=>{
        ReactDOM.unmountComponentAtNode(document.getElementById('lifecycle'))
    }

    render() { 
        return ( 
            <div>
                <h1>Component LifeCycle</h1>
                <p>Counter: {this.state.counter}</p>
                &nbsp;
                <button onClick={this.updateCounter}>Change Counter</button>
                &nbsp;
                <button onClick={this.removeSelf}>Remove Self</button>
            </div>
          );
    }
}
 
export default LifeCycle;
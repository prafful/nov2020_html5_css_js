import React from 'react'

class HelloClass extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            counter:4
        }
        this.changeCounter = this.changeCounter.bind(this)
    }
    
   /*  changeCounter=()=>{
        this.setState({
            counter: this.state.counter + 1
        })
    } */ 

    changeCounter = function(){
        this.setState({
            counter: this.state.counter + 1
        })
    }

  /*   changeCounter(){

    } */


    render() { 
        return (
            <div>
               <h2>Class Component</h2> 
               <button onClick={this.changeCounter}>
                   {this.state.counter}
               </button>
            </div>
          )
    }
}
 
export default HelloClass;
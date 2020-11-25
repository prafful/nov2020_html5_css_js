import React from "react"
import ReactDOM from "react-dom"
import LifeCycle from "./lifecycle/lifecycle";
import ChennaiRootComponent from "./rootcomponent/root";


ReactDOM.render(<ChennaiRootComponent></ChennaiRootComponent>, 
                document.getElementById('globalroot'))

ReactDOM.render(<LifeCycle></LifeCycle>, 
                    document.getElementById('lifecycle'))                
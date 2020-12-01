import React from 'react'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
    
    render() { 
        return ( 
            <div>
                <ol>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/about">About</Link> </li>
                    <li> <Link to="/service">Services</Link> </li>
                </ol>
            </div>
         );
    }
}
 
export default Menu;
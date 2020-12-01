import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from '../pagesComponent/about';
import Home from '../pagesComponent/home';
import Services from '../pagesComponent/services';

class Content extends React.Component {
    
    render() { 
        return (  
            <div>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/service" component={Services}></Route>
                </Switch>
            </div>
        );
    }
}
 
export default Content;
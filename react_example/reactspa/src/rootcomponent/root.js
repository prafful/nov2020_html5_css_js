import React from 'react';
import Content from '../spa/content/content';
import Menu from '../spa/menu/menu';


class RootComponent extends React.Component {
    
    render() { 
        return (  
            <div>
                React SPA!!!!
                <div>
                    <Menu></Menu>
                </div>
                <div>
                    <Content></Content>
                </div>
            </div>
        );
    }
}
 
export default RootComponent;
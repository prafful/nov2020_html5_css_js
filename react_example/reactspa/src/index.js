import React from 'react'
import ReactDOM from "react-dom";
import { HashRouter } from 'react-router-dom';
import RootComponent from './rootcomponent/root';

ReactDOM.render(
                <HashRouter>
                    <RootComponent></RootComponent>
                </HashRouter>,
                document.getElementById('sparoot'))
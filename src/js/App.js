import React, {useState} from 'react';
import Header from "./Header";
import "../css/App.css"
import Footer from "./Footer";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import globalConstants from "./GlobalConstants";
import Welcome from "./Welcome";


const App = () => {
    const [colorMode, setColorMode]=useState("light");
    return (
        <Router>
            <Redirect exact to={globalConstants.rootDir}/>
            <div className={"fullHeight "+colorMode + " mainApp"}>
                <Header setColorMode={setColorMode}/>
                <Switch>
                    <Route exact path={globalConstants.rootDir} component={Welcome}/>
                    {Object.keys(globalConstants.tabToComponent).map
                    ((key, index)=>{
                       return <Route
                           exact path={globalConstants.rootDir+"/"+key}
                           component={globalConstants.tabToComponent[key]}/>
                    })}
                </Switch>

                <Footer colorMode={colorMode}/>
            </div>
        </Router>
    );
};

export default App;


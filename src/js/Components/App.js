import React, {useState} from 'react';
import Header from "./Header/Header";
import "../../css/App.css"
import Footer from "./Footer";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import globalVariables from "../other/GlobalVariables";
import Welcome from "./Welcome";
import UnderConstruction from "./UnderConstruction";


const App = () => {
    const [colorMode, setColorMode]=useState("light");
    globalVariables.colorMode=colorMode;
    return (
        <div>
            <Router>
                <Redirect exact to={globalVariables.rootDir}/>
                <div className={"fullHeight "+colorMode + " mainApp"}>
                    <Header setColorMode={setColorMode}/>
                    <Switch>
                        <Route exact path={globalVariables.rootDir}>
                            <Welcome colorMode={colorMode}/>
                        </Route>
                        {Object.keys(globalVariables.tabToComponent).map
                        ((key, index)=>{
                            return <Route
                                exact path={globalVariables.rootDir+"/"+key}>

                                <UnderConstruction tabName={key}/>
                            </Route>
                        })}
                        {Object.keys(globalVariables.tabToComponent).map
                        ((key, index)=>{
                            return <Route
                                exact path={globalVariables.rootDir+"/"+key+"/beta"}
                                component={globalVariables.tabToComponent[key]}>
                            </Route>
                        })}
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        </div>
    );
};

export default App;


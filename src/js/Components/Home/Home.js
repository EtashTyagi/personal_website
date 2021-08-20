import React from 'react';
import "../../../css/Home.css"
import globalVariables from "../../other/GlobalVariables";

const Home = () => {
    return (
        <div className={"mainContents gradientAnimation "+globalVariables.colorMode}
             style={{fontSize: 18, justifyContent:"center"}}>
            <div className={"pageOverlay "+globalVariables.colorMode}>
                <h1 style={{textAlign:"center"}}>Contents</h1>
                <ol>
                    <li><b>Competitive Programing Profiles</b>
                        <ol>
                            <li><em>Hackerrank</em></li>
                            <li><em>Codeforces</em></li>
                            <li><em>Codechef</em></li>
                        </ol>
                    </li>
                    <br/>
                    <li><b>Mini Projects</b>
                        <ol>
                            <li><em>JPG To ASCII Art</em></li>
                        </ol>
                    </li>
                    <br/>
                </ol>
                <span style={{textAlign:"center"}}>Will Embed soon</span>
                <br/>
                <br/>
            </div>
        </div>
    );
};


export default Home;
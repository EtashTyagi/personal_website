import React from 'react';
import "../../../css/Home.css"
import globalVariables from "../../other/GlobalVariables";
import AsciiImage from "./AsciiImage";

const Home = () => {
    return (
        <div className={"mainContents gradientAnimation "+globalVariables.colorMode}
             style={{fontSize: 18, justifyContent:"center"}}>
            <div className={"pageOverlay "+globalVariables.colorMode}>
                <h1 style={{textAlign:"center"}}>Contents</h1>
                <rect className={"hLine hLine2 "+globalVariables.colorMode} />
                <ol style={{paddingLeft:"1em"}}>
                    <li><b>Why This Website</b></li>
                    <br/>
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
                            <li><em>Image To ASCII Art</em></li>
                        </ol>
                    </li>
                </ol>
                <rect className={"hLine hLine2 "+globalVariables.colorMode} />
                <h2>1. Why This Website</h2>
                <span style={{paddingLeft:"1em", paddingRight:"1em"}}>
                    I made this website mainly to learn Reactjs and to show my projects.
                    Now I also plan to make some new projects in React itself and embed them here,
                    if I don't get bombarded with college deadlines.<br/>
                    <b>PS:</b> I am.
                </span>
                <br/>
                <rect className={"hLine hLine2 "+globalVariables.colorMode} />
                <h2>2. Competitive Programing Profiles</h2>
                <span style={{paddingLeft:"1em", paddingRight:"1em"}}>
                    Will add card that displays dynamic rating on platforms. (Low priority)<br/>
                    Meanwhile see the footer for the links.
                </span>
                <br/>
                <rect className={"hLine hLine2 "+globalVariables.colorMode} />
                <h2>3. Mini Projects</h2>
                <span style={{paddingLeft:"1em", paddingRight:"1em"}}>
                    Cool and easy stuff.
                </span>
                <h3 style={{paddingLeft:"1em", paddingRight:"1em"}}>3.1 Image To ASCII Art</h3>
                <span style={{paddingLeft:"2em", paddingRight:"2em"}}>
                    Python script to convert image into black and white ASCII (HTML/React Component).
                    Will embed soon. Following is a sample of me.
                </span>
                <br/>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <div style={{background:"white", color:"black"}}>
                        <AsciiImage/>
                    </div>
                </div>
                <br/>
            </div>
        </div>
    );
};


export default Home;
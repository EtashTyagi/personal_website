import React from 'react';

const Home = () => {
    return (
        <div className={"mainContents"}
             style={{alignItems: "center", justifyContent: "space-evenly", fontSize: 18}}>
            <span style={{fontSize: 32}}>Why This Website</span><br/>
            This website was made mainly to learn react via a fun project.<br/>
            It is still in it's infancy stage and I plan on adding lots of cool features and utilities on it<br/>
        </div>
    );
};

export default Home;
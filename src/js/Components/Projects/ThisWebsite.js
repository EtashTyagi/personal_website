import React from 'react';

const ThisWebsite = () => {
    return (
        <div className={"mainContents"} style={{flexDirection:"column", alignItems:"center", justifyContent:"center", fontSize:28}}>
            <a target={"_blank"} href={"https://github.com/EtashTyagi/personal_website"} rel={"noreferrer"}>Source Code</a>
            <a target={"_blank"} href={"https://EtashTyagi.github.io/personal_website"} rel={"noreferrer"}>Link</a>
        </div>
    );
};

export default ThisWebsite;
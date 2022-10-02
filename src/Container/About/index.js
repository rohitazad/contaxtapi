import React  from "react";

import ChildComponent from '../../Components/ChildComponents';
const About = ({name, updateName})=>{
    return(
        <>
            <h1>Hello i m About</h1>
            Hello :- {name}
            <hr />
            <ChildComponent name={name} updateName={updateName}/>
        </>
    )
}

export default About;
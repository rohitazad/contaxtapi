import React  from "react";


const Home = ({name, updateName})=>{

    
    
    return(
        <>
            <h1>Hello :- {name} </h1>
            <input type="text" value={name} onChange={(e)=>{updateName(e.target.value)}} placeholder="Enter eny text."/>
        </>
    )
}

export default Home;
import React, { useState } from 'react'

export const contextObject=React.createContext();

const ContextProvider=(props)=>{
    const [scene_id,setscene_id]=useState(null);

    const contextValue={
        scene_id,
        setscene_id
    }
    return (
        <contextObject.Provider value={contextValue}>{props.children}</contextObject.Provider>
    )
}

export default ContextProvider;
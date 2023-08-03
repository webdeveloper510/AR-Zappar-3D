import React, { useState } from 'react'

export const contextObject=React.createContext();

const ContextProvider=(props)=>{
    const [scene_id,setscene_id]=useState(null);
    const [reRender,setreRender]=useState(true);
    const [selectedImage,setselectedImage]=useState([]);
    const [selectedVideos,setselectedVideos]=useState([]);
    const [selected3D,setselected3D]=useState([]);
    const [loader,setloader]=useState(false);
    const [loadContent,setloadContent]=useState(false);

 

    const [contentImgVdo, setcontentImgVdo] = useState(null);
    const [fontselected, Selectedfont] = useState(null);
    const [titleOfProject,settitleOfProject]=useState('');
    const [qrCode,setqrCode]=useState(null);
    const [isPublish,setisPublish]=useState(false)




    

    const contextValue={
        scene_id,
        setscene_id,
        reRender,
        setreRender,
        selectedImage,
        setselectedImage,
        selectedVideos,
        setselectedVideos,
        selected3D,
        setselected3D,
        loader,
        setloader,
        loadContent,
        setloadContent,
        contentImgVdo,
        setcontentImgVdo,
        fontselected,
        Selectedfont,
        titleOfProject,
        settitleOfProject,
        qrCode,
        setqrCode,
        isPublish,
        setisPublish,



    }
    return (
        <contextObject.Provider value={contextValue}>{props.children}</contextObject.Provider>
    )
}

export default ContextProvider;
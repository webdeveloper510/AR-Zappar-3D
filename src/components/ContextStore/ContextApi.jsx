import axios from 'axios';
import React, { useState } from 'react'
import { API } from '../../config/api';

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
    const [allLabels,setallLabels]=useState(null);

    const createLabel= async (id,labelName)=>{
        try {
          const response = await axios.post(API.BASE_URL+'project-label/',{
            project_id:id,
            project_label:labelName,
            user_id:localStorage.getItem('id'),
            required:true,
          })
          console.log(response);
          getLabels()
    
        } catch (err) {
          console.log(err,'this is error in creating label');
        }
      }
    
      const getLabels= async ()=>{
        try {
          const response= await axios.get(API.BASE_URL+"project_label_list/"+localStorage.getItem('id')+'/');
          console.log(response,'this is from GET all labels');
          setallLabels(response.data.data);
          console.log(allLabels,'this is from GET all labels121212121212121212');
    
        } catch (err) {
          console.log(err,'this is error from GET all labels');
        }
      }


    

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
        allLabels,
        setallLabels,
        createLabel,
        getLabels



    }
    return (
        <contextObject.Provider value={contextValue}>{props.children}</contextObject.Provider>
    )
}

export default ContextProvider;
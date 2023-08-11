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

 

    const [contentImgVdo, setcontentImgVdo] = useState([]);
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
        } catch (err) {
          console.log(err,'this is error from GET all labels');
        }
      }

      const updateLabel= async (projectId,bool,labelName)=>{
        try {
          const response = await axios.post(API.BASE_URL+"project-label/",{
            project_id : projectId ,
            project_label : labelName ,
            user_id : localStorage.getItem('id') ,
            required : bool ,
          });
          console.log(response,'from update label');
          getLabels();
        } catch (err) {
          console.log(err,'error to upload labels');
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
        getLabels,
        updateLabel



    }
    return (
        <contextObject.Provider value={contextValue}>{props.children}</contextObject.Provider>
    )
}

export default ContextProvider;
import { createSlice } from '@reduxjs/toolkit';


const initialState={
    isContent:true,
    targetImage:null,
    widthImgVdo:0,
    heightImgVdo:0,
    depthImgVdo:0,
    dposition_x:0,
    dposition_y:0,
    dposition_d:0,
    dRotation_x:0,
    dRotation_y:0,
    dRotation_z:0,

    // valueopacityborder:0,
    twoDthreeDID:null,
    contentImgVdo :null,
    updateVideo:true,
    toUpdateDimensions:false

}

const sideBarContent=createSlice({
    name:'rightSideBAr',
    initialState:initialState,
    reducers:{
        // updateSentbox(state,actions){
        //     state.dataSentbox=actions.payload
        // }
        setContent(state,actions){
          console.log('state,actionsstate,<========================');
            state.isContent=actions.payload
        },
        selectedTargetImage(state,actions){
            state.targetImage=actions.payload;
        },
        setwidthImgVdo(state,actions){
            state.widthImgVdo=actions.payload;
        },
        setheightImgVdo(state,actions){
            state.heightImgVdo=actions.payload;
        },
        setdepthImgVdo(state,actions){
            state.depthImgVdo=actions.payload;
        }, 
        dimposition_x(state,actions){
            state.dposition_x=actions.payload
        },
        dimposition_y(state,actions){
            state.dposition_y=actions.payload
        },
        dimposition_d(state,actions){
            state.dposition_d=actions.payload
        },
        dimRotation_x(state,actions){
            state.dRotation_x=actions.payload
        },
        dimRotation_y(state,actions){
            state.dRotation_y=actions.payload
        },
        dimRotation_z(state,actions){
            state.dRotation_z=actions.payload
        },
        // setborderopacityvalue(state,actions){
        //     state.valueopacityborder=actions.payload
        // },
        lettwoDthreeDID(state,actions){
            state.twoDthreeDID=actions.payload
        },
        setcontentImgVdo(state,actions){
            console.log(actions.payload,'||||||||||||| action payload<||||||||||||||||||');
            state.contentImgVdo=actions.payload
        },
        updateVdo(state){
            state.updateVideo=!state.updateVideo
        },
        settoUpdateDimensions(state){
            state.toUpdateDimensions=!state.toUpdateDimensions;
        }






    }
})
export const sideBarContentAction=sideBarContent.actions
export default sideBarContent.reducer
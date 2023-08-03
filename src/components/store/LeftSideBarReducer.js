import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isButtonDetailShow:false,
    isShowTextDetail:false,
    isShowImageDetail:false,
    isShowVideoDetail:false,
    isShowModalDetail:false,
    isShowAppletsDetail:false,
    isShowModel3dDetail:null,
}

const leftSideBarSlice=createSlice({
    name:'leftSideBar',
    initialState,
    reducers:{
        setisButtonDetailShow(state,actions){
          state.isButtonDetailShow=actions.payload;
        },
        setisShowTextDetail(state,actions){
            state.isShowTextDetail=actions.payload;
          },
          setisShowImageDetail(state,actions){
            state.isShowImageDetail=actions.payload;
          },
          setisShowVideoDetail(state,actions){
            state.isShowVideoDetail=actions.payload;
          },
          setisShowModalDetail(state,actions){
            state.isShowModalDetail=actions.payload;
          },
          setisShowAppletsDetail(state,actions){
            state.isShowAppletsDetail=actions.payload;
          },
          setisShow3Dmodel(state,actions){
            console.log(actions.payload,'HHHHHHHHHHHHHHHH');
            state.isShowModel3dDetail=actions.payload;
          },
    }
});

export const leftSideBarAction=leftSideBarSlice.actions
export default leftSideBarSlice.reducer
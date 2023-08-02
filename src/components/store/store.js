import { configureStore } from '@reduxjs/toolkit';
import sideBarContentReducer from '../../../src/components/store/contentReducer';
import LeftSideBarReducer from './LeftSideBarReducer';

const store = configureStore({
  reducer: {
    sideBarContentReducer:sideBarContentReducer,
    LeftSideBarReducer:LeftSideBarReducer
  }
  
});

export default store;
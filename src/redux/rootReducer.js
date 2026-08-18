import { combineReducers } from "@reduxjs/toolkit";
import EnquirySlice from "./Reducer/EnquirySlice";

const rootReducer = combineReducers({
    enquiry:EnquirySlice
});
export default rootReducer;
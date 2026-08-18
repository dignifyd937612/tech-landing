import { createSlice } from "@reduxjs/toolkit";


const state={
    loading:false,
    addCode:null,
    error:null,
}

const EnquirySlice = createSlice({
    name: "enquiry",
    initialState: state,
  
    reducers: {
      sendEnquiryRequest: (state) => {
        state.loading = true;
      },
  
      EnquiryDone: (state, action) => {
        state.loading = false;
        state.addCode = 200;
      },
  
      EnquiryFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
  
      ResetCode: (state) => {
        state.addCode = null;
      },
    },
  });


export const {sendEnquiryRequest,EnquiryDone,EnquiryFail,ResetCode}= EnquirySlice.actions;

export default EnquirySlice.reducer;
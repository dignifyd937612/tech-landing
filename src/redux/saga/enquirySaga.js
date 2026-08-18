import axios from "axios";
import { call,takeLatest,put } from "redux-saga/effects";
import { apiRouter } from "../config";
import { EnquiryDone, EnquiryFail,sendEnquiryRequest } from "../Reducer/EnquirySlice";



const createApi = (payload) =>{

    return axios.post(apiRouter.enquiry,payload);
}
 

function* createEnquiry(action){

    try {
    const response= yield call(createApi,action.payload);
         yield put(EnquiryDone(response?.data))
        
    } catch (error) {
        console.log(error?.message);
        yield put(EnquiryFail(error?.message));
        
    }
}

export default function* enquirySaga(){
yield takeLatest(sendEnquiryRequest.type,createEnquiry);
}

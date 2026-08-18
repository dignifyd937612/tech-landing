import { all } from "redux-saga/effects";
import enquirySaga from "./enquirySaga";
export default function* rootSaga(){
  yield all([
    enquirySaga(),

  ])

}
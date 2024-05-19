import { takeEvery, put } from "redux-saga/effects";

function* getData(data) {
  console.log({ data });

  console.log("getData called from saga function");
  const dummyData = yield fetch("https://jsonplaceholder.typicode.com/todos");
  const jsonData = yield dummyData.json();
  yield put({ type: "GET_API_DATA", data: jsonData });
}
function* sagaFunction(data) {
  yield takeEvery("ADD_TO_CART", getData);
}
export default sagaFunction;

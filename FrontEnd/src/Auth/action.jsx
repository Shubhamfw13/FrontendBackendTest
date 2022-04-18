import * as types from "./types";
import axios from "axios";

const loginReq = (payload) => ({ type: types.LOGIN_REQUEST, payload });
const loginSuccess = (payload) => ({ type: types.LOGIN_SUCCESS, payload });
const loginFail = (payload) => ({ type: types.LOGIN_FAIL, payload });

const reqApartmentData = (payload) => ({
  type: types.REQ_APARTMENT_DATA,
  payload,
});
const getApartmentData = (payload) => ({
  type: types.GET_APARTMENT_DATA,
  payload,
});
const reqApartmentDataFail = (payload) => ({
  type: types.REQ_APARTMENT_DATA_FAIL,
  payload,
});

const gotResidentData = (resident) => ({
  type: types.GET_RESIDENT,
  payload: resident,
});

const getData = () => async (dispatch) => {
  dispatch(reqApartmentData());

  axios
    .get("https://shubhamapiflat.herokuapp.com/flat")
    .then((res) => {
      console.log(res.data, "res");
      dispatch(getApartmentData(res.data.flat));
    })
    .catch((err) => {
      dispatch(console.log(err));
    });
};

const getResidentData = (id) => async (dispatch) => {
  dispatch(reqApartmentData());

  axios
    .get(`https://shubhamapiflat.herokuapp.com/flat/${id}`)
    .then((res) => {
      console.log(res.data, "res");
      dispatch(gotResidentData(res.data));
    })
    .catch((err) => {
      dispatch(console.log(err));
    });
};

const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginReq({ msg: "Loading" }));
    console.log(email, password);
    const res = await axios
      .post("https://shubhamapiflat.herokuapp.com/login", {
        email,
        password,
      })
      .then((res) => {
        dispatch(
          loginSuccess({ accessToken: res.data.token, user: res.data.user })
        );
      })
      .catch((err) => {
        dispatch(loginFail({ msg: err.respose.data }));
      });
  } catch (error) {
    console.log(error);
  }
};

export { login, getData, getResidentData };

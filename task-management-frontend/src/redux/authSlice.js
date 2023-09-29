import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import history from "../history";

const initialUser = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : null;

const initialState = {
  isLoading: false,
  currentUser: initialUser,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
    registerSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    registerFailure: (state, action) => {
      state.error = action.payload;
    },
    logoutSuccess: (state) => {
      state.currentUser = null;
    },
  },
});

export const {
  loginFailure,
  loginSuccess,
  registerFailure,
  registerSuccess,
  logoutSuccess,
} = authSlice.actions;

export default authSlice.reducer;

export const register = (user) => async (dispatch) => {
  try {
    axios
      .post("https://localhost:7150/api/account/register", user)
      .then((res) => {
        debugger;
        dispatch(registerSuccess(res.data));
        toast.success("Registration Successfull");
        history.push("/login");
        window.location.reload();
      })
      .catch((err) => {
        dispatch(registerFailure());
        toast.error("Registration Fail");
      });
  } catch (error) {
    console.log(error);
    dispatch(registerFailure());
  }
};

export const login = (user) => async (dispatch) => {
  console.log(user);
  try {
    const userData = {
      email: user.email,
      password: user.password,
    };

    axios
      .post("https://localhost:7150/api/account/login", userData)
      .then((res) => {
        dispatch(loginSuccess(res.data));
        localStorage.setItem("auth", JSON.stringify(res.data));
        history.push("/dashboard");
        toast.success("Login Success");

        window.location.reload();
      })
      .catch((err) => {
        dispatch(loginFailure());
        toast.error("Login Fail");
      });
  } catch (error) {
    console.log(error);
    dispatch(loginFailure());
  }
};

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialNote = localStorage.getItem("note")
  ? JSON.parse(localStorage.getItem("note"))
  : null;

const initialState = {
  NoteData: initialNote,
  AllNotes: {},
};

export const noteslice = createSlice({
  name: "note",
  initialState,

  reducers: {
    getAllNotesSuccess: (state, action) => {
      state.AllNotes = action.payload;
    },
    getAllNotesFailure: (state) => {
      return state;
    },
    updateNotesSuccess: (state, action) => {
      state.AllNotes = action.payload;
    },
    updateNotesFailure: (state) => {
      return state;
    },
  },
});

export const {
  getAllNotesSuccess,
  getAllNotesFailure,
  updateNotesSuccess,
  updateNotesFailure,
} = noteslice.actions;

export default noteslice.reducer;

export const getAllNotes = (token, id) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .get(`https://localhost:7150/api/Note/get/${id}`, config)
    .then((res) => {
      debugger;
      dispatch(getAllNotesSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getAllNotesFailure());
      toast.error("Failed to fetch notes");
    });
};

export const addNotes = (note, token) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      description: note,
    },
  };

  axios
    .get("https://localhost:7150/api/note/post", config)
    .then((res) => {
      debugger;
      dispatch(updateNotesSuccess(res.data));
      toast.success("Note updated");
    })
    .catch((err) => {
      dispatch(updateNotesFailure());
      toast.error("Error occured");
    });
};

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../services/api';

// Fetch all lectures for an instructor
export const fetchLectures = createAsyncThunk('lectures/fetch', async (instructorId) => {
  const res = await axios.get(`/lectures/${instructorId}`);
  return res.data;
});

// Schedule a new lecture
export const scheduleLecture = createAsyncThunk('lectures/schedule', async (lectureData) => {
  const res = await axios.post('/lectures/create', lectureData);
  return res.data;
});

const lectureSlice = createSlice({
  name: 'lectures',
  initialState: { list: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLectures.pending, (state) => { state.loading = true; })
      .addCase(fetchLectures.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchLectures.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(scheduleLecture.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  },
});

export default lectureSlice.reducer;

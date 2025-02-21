import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../services/api';

// Fetch instructors
export const fetchInstructors = createAsyncThunk('instructors/fetch', async () => {
  const res = await axios.get('/instructors/all');
  return res.data;
});

// Add instructor
export const addInstructor = createAsyncThunk('instructors/add', async (instructorData) => {
  const res = await axios.post('/instructors/create', instructorData);
  return res.data;
});

const instructorSlice = createSlice({
  name: 'instructors',
  initialState: { list: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInstructors.pending, (state) => { state.loading = true; })
      .addCase(fetchInstructors.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchInstructors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addInstructor.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  },
});

export default instructorSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../services/api';

// Fetch all courses
export const fetchCourses = createAsyncThunk('courses/fetch', async () => {
  const res = await axios.get('/courses/all');
  return res.data;
});

// Add a new course
export const addCourse = createAsyncThunk('courses/add', async (courseData) => {
  const res = await axios.post('/courses/create', courseData);
  return res.data;
});

// Update a course
export const updateCourse = createAsyncThunk('courses/update', async ({ id, updatedData }) => {
  const res = await axios.put(`/courses/${id}`, updatedData);
  return res.data;
});

const courseSlice = createSlice({
  name: 'courses',
  initialState: { list: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => { state.loading = true; })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        const index = state.list.findIndex(course => course._id === action.payload._id);
        if (index !== -1) state.list[index] = action.payload;
      });
  },
});

export default courseSlice.reducer;

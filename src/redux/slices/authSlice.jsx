import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../services/api';

// Login User
export const loginUser = createAsyncThunk('auth/login', async (credentials) => {
  const res = await axios.post('/auth/login', credentials);
  const {token,role} = res.data;

  localStorage.setItem('token', token);
  localStorage.setItem('role', role);

  return { token, role };

});

// Logout User
export const logoutUser = createAsyncThunk('auth/logout', async () => {
  
  localStorage.removeItem('token');
  localStorage.removeItem('role');
  return null;
});

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, loading: false, error: null },
    reducers: {
      initializeAuth: (state) => {
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');
        if (token && role) {
          state.user = { token, role };
        }
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(loginUser.pending, (state) => {
          state.loading = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload; // Update the user state with token and role
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });

export const {initializeAuth} = authSlice.actions;
export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  loading: false,
  error: null,
  booting: true
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setBooting: (state, action) => {
      state.booting = action.payload
    }
  },
})

export const { setUser, setLoading, setError, setBooting } = authSlice.actions

export default authSlice.reducer
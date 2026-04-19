import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  features: [],
  includes: [],
  testimonials: [],
  faqs: [],
};

export const dynamicSlice = createSlice({
  name: "dynamic",
  initialState,
  reducers: {
    initializeValues: (state) => {
      state.features = [];
      state.includes = [];
      state.testimonials = [];
      state.faqs = [];
    },
    removeValue: (state, action) => {
      const { id, listItem } = action.payload;
      state[listItem].splice(id, 1);
    },
    addValue: (state, action) => {
      const { input, listItem } = action.payload;
      if (input && !state[listItem].includes(input)) {
        state[listItem] = [...state[listItem], input];
      }
    },
  },
});

export const { initializeValues, addValue, removeValue } = dynamicSlice.actions;

export default dynamicSlice.reducer;

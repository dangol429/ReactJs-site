import { createSlice } from '@reduxjs/toolkit';

const circleSlice = createSlice({
  name: 'circle',
  initialState: {
    numberOfCircles: 1,
  },
  reducers: {
    setNumberOfCircles: (state, action) => {
      state.numberOfCircles = action.payload;
    },
  },
});

export const { setNumberOfCircles } = circleSlice.actions;
export default circleSlice.reducer;

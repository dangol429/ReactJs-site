import { createSlice } from '@reduxjs/toolkit';
/*  Creating a redux toolkit and setting the data for numberofcircles which will later be extracted during the nuber of cards*/
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

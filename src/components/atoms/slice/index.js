import { createSlice } from '@reduxjs/toolkit';

export const fileContentSlice = createSlice({
  name: 'fileContent',
  initialState: {
    content: '',
  },
  reducers: {
    setFileContent: (state, action) => {
      state.content = action.payload;
      console.log(state.content);
    },
  },
});

export const { setFileContent } = fileContentSlice.actions;

export default fileContentSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';

import fileContentReducer from '../components/atoms/slice/index';

export default configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    fileContent: fileContentReducer,
  },
});

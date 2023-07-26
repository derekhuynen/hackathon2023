import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/config';
import modalReducer from './slice/modalSlice';
import configReducer from './slice/configSlice';
import userReducer from './slice/userSlice';
import projectReducer from './slice/projectSlice';
import projectFormReducer from './slice/projectFormSlice';
import projectDraftReducer from './slice/projectDraftSlice';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  modal: modalReducer,
  config: configReducer,
  user: userReducer,
  project: projectReducer,
  projectForm: projectFormReducer,
  projectDraft: projectDraftReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

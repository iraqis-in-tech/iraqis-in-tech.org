import { combineReducers, createStore } from '@reduxjs/toolkit';
import langReducer from './reducers/langReducer';

const rootReducer = combineReducers({
  lang: langReducer
})

const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>

export default store;
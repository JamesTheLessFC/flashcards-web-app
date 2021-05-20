import { createSlice } from '@reduxjs/toolkit';
import { addQuizId } from '../topics/topicsSlice';

const initialState = {};

const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState,
  reducers: {
    addQuiz: (state, action) => {
      state[action.payload.id] = action.payload;
    }
  }
});

export const createQuiz = (payload) => {
  return (dispatch) => {
    dispatch(addQuiz(payload));
    dispatch(addQuizId(payload));
  }
}

export const selectQuizzes = (state) => {
  return state.quizzes;
}

export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;
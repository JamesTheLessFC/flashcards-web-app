import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    addTopic(state, action) {
      state[action.payload.id] = {
        ...action.payload,
        quizIds: []
      };
    },
    addQuizId(state, action) {
      state[action.payload.topicId].quizIds.push(action.payload.id);
    }
  }
});

export const selectTopics = (state) => {
  return state.topics;
}

export const { addTopic, addQuizId } = topicsSlice.actions;

export default topicsSlice.reducer;
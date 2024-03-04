import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = [{ id: 1, name: "Noman", description: "Developer" }];
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<any>) => {
      const { id, name, description } = action.payload;
      state.push({ id, name, description });
    },
    deletePost: (state, action: PayloadAction<number>) => {
      const postId = action.payload;
      return state?.filter((item: any) => item.id !== postId);
    },
  },
});

export const { addPost, deletePost } = postSlice.actions;

export default postSlice.reducer;

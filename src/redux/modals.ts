import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInterface {
  modalQuickView: boolean;
}

// Սկզբնական state
const initialState: IInterface = {
  modalQuickView: false,
};

// Ստեղծել slice
export const modalsSite = createSlice({
  name: "modals",
  initialState,
  reducers: {
    serModalQuickView: (state, action: PayloadAction<boolean>) => {
      state.modalQuickView = action.payload;
    },
  },
});

// Export actions և reducer
export const { serModalQuickView } = modalsSite.actions;
export default modalsSite.reducer;

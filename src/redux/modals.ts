import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInterface {
  modalQuickView: boolean;
  modalKP: boolean;
}

// Սկզբնական state
const initialState: IInterface = {
  modalQuickView: false,
  modalKP: false,
};

// Ստեղծել slice
export const modalsSite = createSlice({
  name: "modals",
  initialState,
  reducers: {
    serModalQuickView: (state, action: PayloadAction<boolean>) => {
      state.modalQuickView = action.payload;
    },
    serModalKP: (state, action: PayloadAction<boolean>) => {
      state.modalKP = action.payload;
    },
  },
});

// Export actions և reducer
export const { serModalQuickView, serModalKP } = modalsSite.actions;
export default modalsSite.reducer;

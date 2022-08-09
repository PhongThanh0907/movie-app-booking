import { createSlice } from "@reduxjs/toolkit";

interface SpinnerSlice {
    isLoading: boolean;
}

const initialState: SpinnerSlice = {
  isLoading: false,
};

const spinnerSlice = createSlice({
  name: "spinner",
  initialState,
  reducers: {
    setSpinnerStart: (state: any) => {
      state.isLoading = true;
    },
    setSpinnerEnd: (state: any) => {
      state.isLoading = false;
    },
  },
});

export const { setSpinnerEnd, setSpinnerStart } = spinnerSlice.actions;

export default spinnerSlice.reducer;

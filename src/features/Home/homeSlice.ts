import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../store";

// Define a type for the slice state
interface CounterState {
  darkMode: boolean;
}

// Define the initial state using that type
const initialState: CounterState = {
    darkMode: false,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    switchTheme: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
  },
});

export const { switchTheme } = homeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default homeSlice.reducer;

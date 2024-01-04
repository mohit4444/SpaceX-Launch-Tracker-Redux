// filtersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    yearFilter: "",
    successFilter: "true",
    sortOrder: "desc",
  },
  reducers: {
    updateYearFilter: (state, action) => {
      state.yearFilter = action.payload;
    },
    updateSuccessFilter: (state, action) => {
      state.successFilter = action.payload;
    },
    updateSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
});

export const { updateYearFilter, updateSuccessFilter, updateSortOrder } =
  filtersSlice.actions;
export default filtersSlice.reducer;

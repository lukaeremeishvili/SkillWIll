import { createSlice } from '@reduxjs/toolkit';

interface NavbarState {
  isOpen: boolean;
}

const initialState: NavbarState = {
  isOpen: false,
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    toggleNavbar: (state) => {
      state.isOpen = !state.isOpen;
    },
    openNavbar: (state) => {
      state.isOpen = true;
    },
    closeNavbar: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleNavbar, openNavbar, closeNavbar } = navbarSlice.actions;

export default navbarSlice.reducer;

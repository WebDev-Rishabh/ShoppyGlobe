import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    toggleWishlist(state, action) {
      const id = action.payload.id;
      const exists = state.find(p => p.id === id);
      if (exists) {
        return state.filter(p => p.id !== id); 
      } else {
        state.push(action.payload);           
      }
    },
    clearWishlist() {
      return [];
    },
  },
});

export const { toggleWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchData } from './fetchData';
import { Post } from '../../interfaces/Post.interface';

interface DataState {
    data: Post[] | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: DataState = {
    data: null,
    status: 'idle',
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading'; 
            })
            .addCase(fetchData.fulfilled, (state, action: PayloadAction<Post[]>) => {
                state.status = 'succeeded';
                state.data = action.payload; 
            })
            .addCase(fetchData.rejected, (state) => {
                state.status = 'failed'; 
            });
    },
});

export default dataSlice.reducer;

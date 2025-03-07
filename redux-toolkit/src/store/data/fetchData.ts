import { createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from '../../interfaces/Post.interface';

export const fetchData = createAsyncThunk<Post[], string>(
  'data/fetchData',
  async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
  headers: {
    'Content-Type': 'application/json',
  },
});

const defaultParams = {
  page: 1,
  limit: 4,
};

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (options = {}, thunkAPI) => {
    try {
      const params = { ...defaultParams, ...options };
      const { data } = await api.get('/campers', { params });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchCamper = createAsyncThunk(
  'camper/fetchOne',
  async (camperId, thunkAPI) => {
    try {
      const { data } = await api.get('/campers', { camperId });
      // const { data } = await api.get(`/campers/${camperId}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

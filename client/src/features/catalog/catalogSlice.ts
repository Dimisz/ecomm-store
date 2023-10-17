import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../app/models/product";
import agent from "../../app/api/agent";
import { RootState } from "../../app/store/configureStore";

const productsAdapter = createEntityAdapter<Product>();

export const fetchAllProductsAsync = createAsyncThunk<Product[]>(
  'catalog/fetchAllProductsAsync',
  async (_, thunkApi) => {
    try {
      return await agent.Catalog.list();
    }
    catch(error: any){
      return thunkApi.rejectWithValue({ error: error.data });
    }
  }
)

export const fetchProductAsync = createAsyncThunk<Product, number>(
  'catalog/fetchProductAsync',
  async (productId, thunkApi) => {
    try {
      return await agent.Catalog.details(productId);
    }
    catch(error: any){
      console.log(thunkApi.rejectWithValue({error: error.data}));
    }
  }
)

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: productsAdapter.getInitialState({
    productsLoaded: false,
    status: 'idle'
  }),
  reducers: {},
  extraReducers: (builder => {
    builder.addCase(fetchAllProductsAsync.pending, (state) => {
      state.status = 'pendingFetchAllProducts';
    });
    builder.addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
      productsAdapter.setAll(state, action.payload);
      state.status = 'idle';
      state.productsLoaded = true;
    });
    builder.addCase(fetchAllProductsAsync.rejected, (state, action) => {
      state.status = 'idle';
      console.log(action.payload);
    });
    builder.addCase(fetchProductAsync.pending, (state) => {
      state.status = 'pendingFetchProduct';
    });
    builder.addCase(fetchProductAsync.fulfilled, (state, action) => {
      productsAdapter.upsertOne(state, action.payload);
      state.status = 'idle';
    });
    builder.addCase(fetchProductAsync.rejected, (state, action) => {
      console.log(action);
      state.status = 'idle';
    });

  })
})

export const productSelectors = productsAdapter.getSelectors((state: RootState) => state.catalog);
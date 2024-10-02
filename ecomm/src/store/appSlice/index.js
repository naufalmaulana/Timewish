import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    value: 0,
    data: [],
    product: {},
    loading: false,
    error: "",
    totalProduct: 0,
    page: 1,
  },
  reducers: {
    fetchDataSuccess: (state, action) => {
      state.data = action.payload;
    },
    fetchProductByIdSuccess: (state, action) => {
      state.product = action.payload;
    },
    fetchLoading: (state, action) => {
      state.loading = action.payload;
    },
    fetchError: (state, action) => {
      state.error = action.payload;
    },
    getTotalProduct: (state, action) => {
      state.totalProduct = action.payload;
    },
    changePageProduct: (state, action) => {
      state.page = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  fetchDataSuccess,
  fetchProductByIdSuccess,
  fetchLoading,
  fetchError,
  getTotalProduct,
  changePageProduct,
} = appSlice.actions;

export function fetchProduct(params) {
  return async function fetchProductThunk(dispatch) {
    dispatch(fetchLoading(true));
    try {
      let url = "https://api.h8-fern.foxhub.space/products?&category=3&sellerId=21"
      
      if(params?.page){
        url += `&page[number]=${params.page}`
      }

      const response = await axios({
        url,
        method: "get",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });

      // console.log(response.data);
      dispatch(fetchDataSuccess(response.data.rows))
      dispatch(getTotalProduct(response.data.count))
      dispatch(changePageProduct(response.data.page));
    } catch (error) {
      console.log(error);
      toast.error("Fetch product error");
      // dispatch(fetchError(error.response.message || "error fetch data"));
    } finally {
      dispatch(fetchLoading(false));
    }
  };
}

export const fetchProductById = (id) => async (dispatch) => {
  dispatch(fetchLoading(true));
  console.log(id);
  
  try {
    const response = await axios({
      url: `https://api.h8-fern.foxhub.space/products/${id}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    });
    // console.log(response.data);
    
    dispatch(fetchProductByIdSuccess(response.data));
  } catch (error) {
    toast.error("error fetching data");
    dispatch(fetchError(error.response.message || "error fetch data"));
  } finally {
    dispatch(fetchLoading(false));
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  dispatch(fetchLoading(true));
  try {
    const response = await axios({
      url: `https://api.h8-fern.foxhub.space/products/${id}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    });

    dispatch(fetchProduct());
  } catch (error) {
    toast.error("error delete data");
    dispatch(fetchError(error.response.message || "error fetch data"));
  } finally {
    dispatch(fetchLoading(false));
  }
};

export default appSlice.reducer;

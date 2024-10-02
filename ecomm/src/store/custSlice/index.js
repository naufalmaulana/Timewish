import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const custSlice = createSlice({
  name: "customer",
  initialState: {
    products: [],
    productDetail: {},
    loading: false,
    error: "",
    cart: [],
  },
  reducers: {
    fetchProductsCust: (state, action) => {
      state.products = action.payload;
    },
    fetchProductDetail: (state, action) => {
      state.productDetail = action.payload;
    },
    fetchProductCart: (state, action) => {
      state.cart = action.payload;
    },
    fetchProductsLoad: (state, action) => {
      state.loading = action.payload;
    },
    fetchProductsError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  fetchProductsCust,
  fetchProductsLoad,
  fetchProductsError,
  fetchProductDetail,
  fetchProductCart,
} = custSlice.actions;

export const fetchCust = (params) => async (dispatch) => {
  dispatch(fetchProductsLoad(true));
  try {
    let url =
      "https://api.h8-fern.foxhub.space/pub/products?&category=3&sellerId=21";

    if (params.page) {
      url += `&page[number]=${params.page}`;
    }
    if (params.search) {
      url += `&search=${params.search}`;
    }
    if (params.sort) {
      url += `&sort[price]=${params.sort ? "highest" : "lowest"}`;
    }

    const response = await axios({
      method: "get",
      url,
    });
    // console.log(response);
    dispatch(fetchProductsCust(response.data.rows));
  } catch (error) {
    console.log("error");
    toast.error("error fetch data");
    dispatch(fetchProductsError(error));
  } finally {
    dispatch(fetchProductsLoad(false));
  }
};

export const fetchProductDetailCust = (id) => async (dispatch) => {
  dispatch(fetchProductsLoad(true));

  try {
    let url = `https://api.h8-fern.foxhub.space/pub/products/${id}`;

    const response = await axios({
      method: "get",
      url,
    });

    // console.log(response.data);
    dispatch(fetchProductDetail(response.data));
  } catch (error) {
    console.log(error);
    toast.error("error fetching data");
    dispatch(fetchProductsError(error));
  } finally {
    dispatch(fetchProductsLoad(false));
  }
};

export const fetchCart = (id) => async (dispatch) => {
  dispatch(fetchProductsLoad(true));

  try {
    let url = `https://api.h8-fern.foxhub.space/carts`;

    const response = await axios({
      method: "get",
      url,
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    });

    // console.log(response.data);
    dispatch(fetchProductCart(response.data));
  } catch (error) {
    console.log(error);
    toast.error("error fetching data");
    dispatch(fetchProductsError(error));
  } finally {
    dispatch(fetchProductsLoad(false));
  }
};

export default custSlice.reducer;

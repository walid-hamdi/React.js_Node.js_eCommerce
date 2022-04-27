import {
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAIL,
  DETAILS_ORDER_REQUEST,
  DETAILS_ORDER_SUCCESS,
  DETAILS_ORDER_FAIL,
  PAY_ORDER_RESET,
  PAY_ORDER_FAIL,
  PAY_ORDER_SUCCESS,
  PAY_ORDER_REQUEST,
  LIST_MY_ORDER_REQUEST,
  LIST_MY_ORDER_SUCCESS,
  LIST_MY_ORDER_FAIL,
  LIST_MY_ORDER_RESET,
} from "../constants/orderConstants";

export const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case PLACE_ORDER_REQUEST:
      return { loading: true };

    case PLACE_ORDER_SUCCESS:
      return { loading: false, success: true, orderInfo: action.payload };

    case PLACE_ORDER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const orderDetailsReducer = (
  state = { orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case DETAILS_ORDER_REQUEST:
      return { ...state, loading: true };

    case DETAILS_ORDER_SUCCESS:
      return { loading: false, orderDetails: action.payload };

    case DETAILS_ORDER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case PAY_ORDER_REQUEST:
      return { loading: true };

    case PAY_ORDER_SUCCESS:
      return { loading: false, success: true };

    case PAY_ORDER_FAIL:
      return { loading: false, error: action.payload };
    case PAY_ORDER_RESET:
      return {};

    default:
      return state;
  }
};

export const orderMyListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case LIST_MY_ORDER_REQUEST:
      return { loading: true };

    case LIST_MY_ORDER_SUCCESS:
      return { loading: false, orders: action.payload };

    case LIST_MY_ORDER_FAIL:
      return { loading: false, error: action.payload };
    case LIST_MY_ORDER_RESET:
      return { orders: [] };

    default:
      return state;
  }
};

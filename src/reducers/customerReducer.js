import { NEW_CUSTOMER } from '../actions/types';

const initialState = {
  customers: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case NEW_CUSTOMER:
      return {...state, customers: [...state.customers, action.payload]};

    default:
      return state;
  }
}
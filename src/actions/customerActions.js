import { NEW_CUSTOMER } from './types'

export const createCustomer = customer => dispatch => {
  dispatch({
    type: NEW_CUSTOMER, 
    payload: customer
  })
}
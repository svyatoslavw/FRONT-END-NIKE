import { cartSlice } from './cart/cart.slice'
import { filtersSlice } from './filters/filters.slice'
import * as userActions from './user/user.actions'

export const rootActions = {
  ...userActions,
  ...filtersSlice.actions,
  ...cartSlice.actions,
}

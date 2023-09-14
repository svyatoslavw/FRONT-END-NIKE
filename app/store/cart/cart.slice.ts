import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IAddToCartPayload, IChangeQuantityPayload, IInitialState } from './cart.types'

const initialState: IInitialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
      const id = state.items.length
      state.items.push({ ...action.payload, id })
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter((item) => item.product.id !== action.payload.id)
    },
    changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>) => {
      const item = state.items.find((item) => item.id === action.payload.id)
      if (item) action.type === 'plus' ? item.quantity++ : item.quantity--
    },
    reset: (state) => {
      state.items = []
    },
  },
})

import { createReducer, on } from '@ngrx/store';
import { state } from'@angular/animations';
import { addWish, removeWish, removeWishID } from './counter.actions';

export const initialState: Array<any> = [];

export const wishesReducer = createReducer(
    initialState,
    on(addWish, (state, {image, title, id})=>{
        state = [...state, {image, title, id}]
        return state
    }),
    on(removeWish, (state, { index })=> {
        state = [...state]
        state.splice(index,1)
        return state
    }),
    on(removeWishID, (state, { id })=> {
        state = [...state]
        let index = state.findIndex(item=>{
            return item.id == id
        })
        state.splice(index,1)
        return state
    })
)
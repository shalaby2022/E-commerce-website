import { createAction, props } from '@ngrx/store';

export const addWish = createAction(
    'Add wish',
    props<{ image: string , title: string ,id: number}>()
);

export const removeWish = createAction(
    'remove wish',
    props<{ index: number}>()
);

export const removeWishID = createAction(
    'remove wishID',
    props<{ id: number}>()
);
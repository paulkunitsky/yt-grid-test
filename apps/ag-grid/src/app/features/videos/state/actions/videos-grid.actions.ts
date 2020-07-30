import { createAction, props } from '@ngrx/store';

export const setIsAllRowsSelected = createAction(
  '[videos-grid] unselect all rows',
  props<{ value: boolean }>()
);

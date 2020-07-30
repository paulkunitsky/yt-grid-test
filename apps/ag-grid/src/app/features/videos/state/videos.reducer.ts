import * as fromRoot from '../../../state/app.state';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { VideosGridActions } from './actions/index';

export const videosFeatureKey = 'videos-grid';

export interface AppState extends fromRoot.AppState {
  [videosFeatureKey]: VideosState
}

export interface VideosState {
  isAllRowsSelected: boolean;
}

export const initialState: VideosState = {
  isAllRowsSelected: false
};

export const reducer = createReducer<VideosState>(
  initialState,
  on(VideosGridActions.setIsAllRowsSelected, (state, action): VideosState => {
    return {
      ...state,
      isAllRowsSelected: action.value
    };
  })
);

export const videosStateSelector = createFeatureSelector<VideosState>(videosFeatureKey);
export const isAllRowsSelectedSelector = createSelector(videosStateSelector, (state: VideosState) => state.isAllRowsSelected);

const requestBloodPressuresType = 'REQUEST_WEATHER_FORECASTS';
const receiveBloodPressuresType = 'RECEIVE_WEATHER_FORECASTS';
const initialState = { forecasts: [], isLoading: false };

export const actionCreators = {
  requestBloodPressures: startDateIndex => async (dispatch, getState) => {
    if (startDateIndex === getState().BloodPressures.startDateIndex) {
      // Don't issue a duplicate request (we already have or are loading the requested data)
      return;
    }

    dispatch({ type: requestBloodPressuresType, startDateIndex });

    const url = `api/HistoryData/BloodPressures?startDateIndex=${startDateIndex}`;
    const response = await fetch(url);
    const forecasts = await response.json();

    dispatch({ type: receiveBloodPressuresType, startDateIndex, forecasts });
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === requestBloodPressuresType) {
    return {
      ...state,
      startDateIndex: action.startDateIndex,
      isLoading: true
    };
  }

  if (action.type === receiveBloodPressuresType) {
    return {
      ...state,
      startDateIndex: action.startDateIndex,
      forecasts: action.forecasts,
      isLoading: false
    };
  }

  return state;
};

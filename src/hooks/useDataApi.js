import React from 'react';
import axios from 'axios';

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        error: false,
        loading: true
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        error: false,
        loading: false,
        data: action.pyload
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        error: true,
        loading: false
      };
    default:
      return state;
  }
};

export const useDataApi = (initialUrl, initialData) => {
  const [url, setUrl] = React.useState(initialUrl);

  const [state, dispatch] = React.useReducer(dataFetchReducer, {
    loading: false,
    error: false,
    data: initialData
  });

  React.useEffect(
    () => {
      const fetchData = async () =>{
        dispatch({ type: 'FETCH_INIT' });

        try {
          const result = await axios(url);
          dispatch({ type: 'FETCH_SUCCESS', pyload: result.data });
        } catch (error) {
          dispatch({ type: 'FETCH_ERROR' })
        }
      }

      fetchData();
    },
    [url] // keep the data in sync with the url
  );

  return [state, setUrl]
};
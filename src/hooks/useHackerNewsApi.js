import React from 'react';
import axios from 'axios';

export const useHackerNewsApi = (initialUrl, initialData) => {
  const [data, setData] = React.useState(initialData);
  const [url, setUrl] = React.useState(initialUrl);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(
    () => {
      const fetchData = async () =>{
        setError(false);
        setLoading(true);

        try {
          const result = await axios(url);
          setData(result.data);
        } catch (error) {
          setError(true);
        }

        setLoading(false);

      }

      fetchData();
    },
    [url] // keep the data in sync with the url
  );

  return [{ data, loading, error }, setUrl];

};
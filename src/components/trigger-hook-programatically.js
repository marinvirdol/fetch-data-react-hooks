import React from 'react';
import axios from 'axios';
import { ArticlesList } from './articles-list';

export const TriggerHookProgrammatically = () => {
  const [data, setData] = React.useState({hits: []});
  const [query, setQuery] = React.useState('redux');
  const [url, setUrl] = React.useState(`https://hn.algolia.com/api/v1/search?query=${query}`);
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

  // <> </> is equivalent with <React.Fragment></React.Fragment>
  return (
    <>
      <form
        onSubmit={
          (event) => {
            event.preventDefault();

            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
        }
      >
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      {
        error && <div>Something went wrong ...</div>
      }

      {
        loading
          ? <div>Loading...</div>
          : <ArticlesList hits={data.hits} />
      }
    </>
  )
};
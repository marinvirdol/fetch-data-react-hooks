import React from 'react';
import { ArticlesList } from './articles-list';
import { useDataApi } from '../hooks/useDataApi';

export const ReducerHookDataFetching = () => {
  const [query, setQuery] = React.useState('redux');
  const [{data, loading, error}, doFetch] = useDataApi(
    `https://hn.algolia.com/api/v1/search?query=${query}`,
    {hits: []}
  );

  return (
    <>
      <form
        onSubmit={
          (event) => {
            event.preventDefault();

            doFetch(`https://hn.algolia.com/api/v1/search?query=${query}`)
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

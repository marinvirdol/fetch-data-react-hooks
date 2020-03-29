import React from 'react';
import { useHackerNewsApi } from '../hooks/useHackerNewsApi';
import { ArticlesList } from './articles-list';

export const CustomDataFetchingHook = () => {
  const [query, setQuery] = React.useState('redux');
  const [{data, loading, error}, doFetch] = useHackerNewsApi(
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

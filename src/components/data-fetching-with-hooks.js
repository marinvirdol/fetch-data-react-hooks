import React from 'react';
import axios from 'axios';
import { ArticlesList } from './articles-list';

export const DataFetchingWithHooks = () => {
  const [data, setData] = React.useState({hits: []});

  /**
   * Without the second argument (empty array), the effect hook runs when the component mounts but also when the component updates
   * The empty array as second argument will make the effect to run only when the component mounts
   * The second argument can be used to define all the variables on which the hook depends.
   * Only when one of the variables changes, the hooks runs again.
   * If the array with th variables is empty, the hook doesn't run when updating the component
   * The effect hook should return nothing or a clean up function
   * EXTRA: // Every function annotated with async returns an implicit promise
   */
  React.useEffect(
    () => {
      const fetchData = async () =>{
        const result = await axios('https://hn.algolia.com/api/v1/search?query=redux');

        setData(result.data);
      }

      fetchData();
    },
    []
  );

  return (
    <ArticlesList hits={data.hits} />
  );
};

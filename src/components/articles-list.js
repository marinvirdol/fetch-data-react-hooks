import React from 'react';

export const ArticlesList = ({hits}) => (
  <ul>
    {hits.map(item => (
      <li key={item.objectID}>
        <a href={item.url}>{item.title}</a>
      </li>
    ))}
  </ul>
);

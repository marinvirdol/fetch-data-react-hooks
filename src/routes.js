import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { DataFetchingWithHooks } from './components/data-fetching-with-hooks';
import { TriggerHookProgrammatically } from './components/trigger-hook-programatically';
import { CustomDataFetchingHook } from './components/custom-data-fetching-hook';
import { ReducerHookDataFetching } from './components/reducer-hook-data-fetching';

export const Routes = () => (
  <Switch>
    <Route path="/reducer-hook-data-fetching" component={ReducerHookDataFetching} />
    <Route path="/custom-data-fetching-hook" component={CustomDataFetchingHook}/>
    <Route path="/trigger-hooks-programmatically" component={TriggerHookProgrammatically} />
    <Route path="/" component={DataFetchingWithHooks} extact></Route>
    <Route path="**" component={() => <h1>Not Found</h1>} />
  </Switch>
);

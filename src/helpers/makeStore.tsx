import React from 'react';
import { useImmerReducer, Reducer } from 'use-immer';

interface IProps {
  children: '' | JSX.Element | JSX.Element[];
}

function makeStore(
  userReducer: Reducer,
  initialState,
  key: string
): (React.FunctionComponent<IProps> | (() => {}) | (() => string))[] {
  const DispatchContext = React.createContext({});
  const StateContext = React.createContext('');

  try {
    initialState = JSON.parse(localStorage.getItem(key) || '') || initialState;
  } catch {}

  const reducer = (draft, action): Reducer => {
    const newState = userReducer(draft, action);
    localStorage.setItem(key, JSON.stringify(newState));
    return newState;
  };

  const StateProvider: React.FC<IProps> = (props: IProps): JSX.Element => {
    const { children } = props;
    const [state, dispatch] = useImmerReducer(reducer, initialState);

    return (
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>{children}</StateContext.Provider>
      </DispatchContext.Provider>
    );
  };

  const useDispatch = (): {} => {
    return React.useContext(DispatchContext);
  };

  const useStore = (): string => {
    return React.useContext(StateContext);
  };

  return [StateProvider, useDispatch, useStore];
}

export default makeStore;

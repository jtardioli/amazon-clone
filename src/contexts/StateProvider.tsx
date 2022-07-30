import {
  createContext,
  Dispatch,
  ReactNode,
  Reducer,
  useContext,
  useReducer,
} from "react";
import { Action } from "../reducers/reducer";

export interface State {
  cart: any[];
}

export const StateContext = createContext<[State, Dispatch<Action>]>(
  undefined!
);

export const StateProvider = ({
  reducer,
  children,
}: {
  reducer: Reducer<State, Action>;
  children: ReactNode;
}) => {
  const initialState = {
    cart: [],
  };
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);

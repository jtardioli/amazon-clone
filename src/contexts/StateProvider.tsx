import { onAuthStateChanged, User } from "firebase/auth";
import {
  createContext,
  Dispatch,
  ReactNode,
  Reducer,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { auth } from "../config/firebase.config";
import { Action, ActionType } from "../reducers/reducer";
import { Item } from "../ts/items";

export interface State {
  cart: Item[];
  user: User | undefined | null;
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
    user: undefined,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("User >>>", user);
      if (user) {
        // User is signed in, see docs for a list of available properties
        dispatch({ type: ActionType.SET_USER, user });
      } else {
        // User is signed out
        dispatch({ type: ActionType.SET_USER, user: null });
      }
    });
  }, []);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);

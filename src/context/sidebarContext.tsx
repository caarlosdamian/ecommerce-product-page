import { createContext, useCallback, useMemo, useReducer } from 'react';

const ActionTypes = {
  SIDEBAR: 'SIDEBAR',
  CART: 'CART',
} as const;

type Action =
  | { type: typeof ActionTypes.SIDEBAR }
  | { type: typeof ActionTypes.CART };

interface SidebarState {
  sidebar: boolean;
  cart: boolean;
}

interface SidebarContextValue {
  state: SidebarState;
  handleSidebarToggle: () => void;
  handleCartToggle: () => void;
}

export const SidebarContext = createContext<SidebarContextValue>({
  handleSidebarToggle: () => undefined,
  handleCartToggle: () => undefined,
  state: {
    sidebar: false,
    cart: false,
  },
});

const toggleReducer = (state: SidebarState, action: Action) => {
  switch (action.type) {
    case 'CART':
      return { ...state, cart: !state.cart };
    case 'SIDEBAR':
      return { ...state, sidebar: !state.sidebar };
    default:
      break;
  }

  return state;
};

export const SidebarProvider = (props: any) => {
  const [state, dispatch] = useReducer(toggleReducer, {
    sidebar: false,
    cart: false,
  });

  const handleSidebarToggle = useCallback(
    () => dispatch({ type: 'SIDEBAR' }),
    []
  );
  const handleCartToggle = useCallback(
    () => dispatch({ type: 'CART' }),
    []
  );

  const value = useMemo(
    () => ({ state, handleSidebarToggle, handleCartToggle }),
    [state, handleSidebarToggle,handleCartToggle]
  );
  return <SidebarContext.Provider value={value} {...props} />;
};

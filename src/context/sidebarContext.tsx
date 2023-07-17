import { createContext, useCallback, useMemo, useReducer } from 'react';

export const ActionTypes = {
  SIDEBAR: 'SIDEBAR',
  CART: 'CART',
  SLIDER: 'SLIDER',
} as const;

type Action =
  | { type: typeof ActionTypes.SIDEBAR }
  | { type: typeof ActionTypes.CART }
  | { type: typeof ActionTypes.SLIDER };

interface SidebarState {
  sidebar: boolean;
  cart: boolean;
  slider: boolean;
}

interface SidebarContextValue {
  state: SidebarState;
  handleSidebarToggle: () => void;
  handleCartToggle: () => void;
  handleSliderToggle: () => void;
}

export const SidebarContext = createContext<SidebarContextValue>({
  handleSidebarToggle: () => undefined,
  handleCartToggle: () => undefined,
  handleSliderToggle: () => undefined,
  state: {
    sidebar: false,
    cart: false,
    slider: false,
  },
});

const toggleReducer = (state: SidebarState, action: Action) => {
  switch (action.type) {
    case 'CART':
      return { ...state, cart: !state.cart };
    case 'SIDEBAR':
      return { ...state, sidebar: !state.sidebar };
    case 'SLIDER':
      return { ...state, slider: !state.slider };
    default:
      break;
  }

  return state;
};

export const SidebarProvider = (props: any) => {
  const [state, dispatch] = useReducer(toggleReducer, {
    sidebar: false,
    cart: false,
    slider: false,
  });

  const handleSidebarToggle = useCallback(
    () => dispatch({ type: 'SIDEBAR' }),
    []
  );
  const handleCartToggle = useCallback(() => dispatch({ type: 'CART' }), []);
  const handleSliderToggle = useCallback(
    () => dispatch({ type: 'SLIDER' }),
    []
  );

  const value = useMemo(
    () => ({
      state,
      handleSidebarToggle,
      handleCartToggle,
      handleSliderToggle,
    }),
    [state, handleSidebarToggle, handleCartToggle, handleSliderToggle]
  );
  return <SidebarContext.Provider value={value} {...props} />;
};

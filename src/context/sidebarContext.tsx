/* eslint-disable @typescript-eslint/no-empty-function */
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

interface SidebarContextValue {
    show: boolean;
    setShow: (show: boolean) => void;
    handleToggle: () => void;
  }

export const SidebarContext = createContext<SidebarContextValue>({
  handleToggle: () => {},
  setShow: () => {},
  show: false,
});

export const SidebarProvider = (props: any) => {
  const [show, setShow] = useState(false);
  const handleToggle = useCallback(() => setShow(!show), [show]);

  const value = useMemo(
    () => ({ show, setShow, handleToggle }),
    [show, handleToggle]
  );
  return <SidebarContext.Provider value={value} {...props} />;
};

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error(
      'useSidebarContext should be use only under SidebarProvider'
    );
  }
  return context;
};

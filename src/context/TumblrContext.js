import { createContext, useState } from "react";

export const conManager = createContext();
export default function TumblrContext({ children }) {
  const [signUp, setSignUp] = useState(false);
  const [view, setView] = useState({
    postType: false,
    textPost: false
  });

  const exportData = {
    signUp,
    setSignUp,
    view,
    setView
  };

  return (
    <conManager.Provider value={exportData}>{children}</conManager.Provider>
  );
}

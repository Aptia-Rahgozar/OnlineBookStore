import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - OnlineBookStore`;
  }, [title]);

  return null;
};

import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Avengers Toys || ${title}`;
  }, [title]);
};

export default useTitle;

import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    document.title = `IAT || ${title}`;
  }, [title]);
};

export default useTitle;

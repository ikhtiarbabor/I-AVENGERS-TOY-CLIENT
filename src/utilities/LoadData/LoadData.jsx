import { useEffect, useState } from "react";

const LoadData = (url, dependency) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [dependency]);
  return data;
};

export default LoadData;

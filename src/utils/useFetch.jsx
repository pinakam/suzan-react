import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [jsData, setJsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setJsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [url]);

  return [jsData, setJsData];
};

export default useFetch;
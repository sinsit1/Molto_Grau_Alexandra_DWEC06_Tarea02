import {useEffect, useState} from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      try {
        setIsLoading(true);
        axios.get(url).then((response) => {
          setData(response.data);
          setIsLoading(false);
        });
      } catch (error) {
        setIsError(true);
      }
    };

    fetchData();
  }, [url]);
  return [{ data, isLoading, isError }];
};

export default useFetch;
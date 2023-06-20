import React, { useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
// import { mockData } from '../mock/index.js';
// import { fetchMockData } from '../utils/service.js';

const useFetch = (fetchHandler) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchMyApi = useCallback(async () => {
        setIsError(false);
        setIsLoading(true);
    
        try {
          let response = await fetchHandler();
          setData(response);
        } catch (e) {
          console.log(e);
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
    }, [] )
    
useEffect(() => {
    fetchMyApi()
}, [])


    return {
        data,
        isLoading,
        isError,
        setData
    }
};

export default useFetch;


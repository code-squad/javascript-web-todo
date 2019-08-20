import React, { useEffect } from 'react';

const useFetch = (callback, url) => {
    const fetchAPI = async () => {
        try {
            const reqData = await fetch(url);
            const resData = await reqData.json();
            callback(resData.body);
            
        } catch (e) {
            console.log(e);
            return;
        }
    }    

    useEffect(() => {
        fetchAPI();
    }, [])
}

export default useFetch;
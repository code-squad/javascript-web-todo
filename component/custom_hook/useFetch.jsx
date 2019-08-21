import React, { useState, useEffect } from 'react';

const useFetch = (callback, url) => {
    const [loading, setLoading] = useState(false)

    const fetchAPI = async () => {
        try {
            const reqData = await fetch(url);
            const resData = await reqData.json();
            callback(resData.body);
            setLoading(true);      

        } catch (e) {
            console.log(e);
            return;
        }
    }    

    useEffect(() => {
        fetchAPI();
    }, [])

    return loading;
}

export default useFetch;
import { useEffect, useState } from "react";
import axios from "axios";

//custom hook, como só pode exportar uma vez, retornamos os dados para ter acesso onde quiser
export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get(url)
        .then((res) => setData(res.data), setLoading(false))
        .catch((err) => console.log(err))
    }, [url]);

    return {data, loading}
}
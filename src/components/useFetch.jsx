//CUSTOM HOOK

import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect( () => {
        setTimeout(() => {
            fetch(url).then(res => {
            return res.json();
            }).then(data => {
                setData(data);
                setTimeout(setIsPending(false));
            })
            .catch((err) => {
                console.log(err.message);
            })
        }, 500);
    }, [url]);

    return { data, isPending }
}

export default useFetch;
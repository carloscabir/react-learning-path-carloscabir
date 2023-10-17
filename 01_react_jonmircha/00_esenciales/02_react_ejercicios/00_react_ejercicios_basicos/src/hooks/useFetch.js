import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fecthData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);

        if (!res.ok) {
          let err = new Error("Error en la peticion Fetch");
          err.status = res.status || "00";
          err.statusText = res.statusText || "Ocurrio un error";

          throw err;
        }

        const json = await res.json();
        console.log(json);

        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (err) {
        if (!signal.aborted) {
          setData(null);
          setError(err);
        }
      } finally {
        if (!signal.aboted) {
          setLoading(false);
        }
      }
    };
    fecthData();

    return () => abortController.abort();
  }, [url]);

  return {
    data,
    error,
    loading,
  };
};

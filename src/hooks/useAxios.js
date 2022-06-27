import { useState } from "react";
import axios from "axios";

const useAxios = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const fetch = (url) => {
    setLoading(true);

    axios.get(url)
    .then(res => setData(res))
    .catch(err => setError(err))
    .finally(() => setLoading(false));
  }

  const res = {data, loading, error};

  return [res, fetch];
}

export default useAxios;
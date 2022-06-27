import { useEffect } from "react";
import useAxios from "../../hooks/useAxios";

const baseUrl = "https://api.themoviedb.org/3/";
const token = "d3b1937f2d29d2efef3c447aeb8d2a64";

const Providers = ({ type }) => {
  const [providers, fetchProviders] = useAxios();

  useEffect(() => {
    fetchProviders(baseUrl + `watch/providers/${type}` + "?api_key=" + token);
  }, [])
  console.log(providers.data);
  return (
    <div></div>
  );
};

export default Providers;
import { useRouter } from "next/router";
import { useEffect } from "react";
import CastItem from "../../src/components/CastItem/CastItem";
import CrewItem from "../../src/components/CrewItem/CrewItem";
import DetailsHeader from "../../src/components/DetailsHeader/DetailsHeader";
import Providers from "../../src/components/Providers/Providers";
import Slider from "../../src/components/Slider/Slider";
import useAxios from "../../src/hooks/useAxios";

const baseUrl = "https://api.themoviedb.org/3/";
const token = "d3b1937f2d29d2efef3c447aeb8d2a64";

const Details = () => {
  const router = useRouter();
  const {query} = router;

  const [credits, fetchCast] = useAxios();

  const data = [
    {title: 'Cast', data: credits?.data?.data?.cast, comp: (item) => <CastItem data={item} />},
    {title: 'Crew', data: credits?.data?.data?.crew, comp: (item) => <CrewItem data={item} />}
  ]
  
  useEffect(() => {
    fetchCast(baseUrl + `${query.movieOrTv}/${query.id}/credits` + "?api_key=" + token);
  }, []);

  return(
    <div>
      <DetailsHeader type={query.movieOrTv} id={query.id} />
      <Slider title="Credits" sliderData={data} />
      <Providers type={query.movieOrTv} />
    </div>
  );
}

export default Details;
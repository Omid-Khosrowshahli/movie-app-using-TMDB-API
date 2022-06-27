import { useRouter } from "next/router";
import CastSlider from "../../src/components/CastSlider/CastSlider";
import DetailsHeader from "../../src/components/DetailsHeader/DetailsHeader";
import Providers from "../../src/components/Providers/Providers";

const Details = () => {
  const router = useRouter();

  const {query} = router;

  return(
    <div>
      <DetailsHeader type={query.movieOrTv} id={query.id} />
      <CastSlider type={query.movieOrTv} id={query.id} />
      <Providers type={query.movieOrTv} />
    </div>
  );
}

export default Details;
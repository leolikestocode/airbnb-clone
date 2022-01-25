import { useRouter } from "next/router";
import { IPlace } from "../../types/general";
import Header from "../components/Header";
import Map from "../components/Map";
import Place from "../components/Place";

const Places = ({ places }: { places: IPlace[] }) => {
  const router = useRouter();
  const { search, guests, startDate, endDate } = router.query;

  const [sYear, sMonth, sDay] = (startDate || "").substring(0, 10).split("-");
  const [eYear, eMonth, eDay] = (endDate || "").substring(0, 10).split("-");

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <Header />
        <div className="flex flex-col lg:flex-row overflow-scroll">
          <div className="flex flex-col xl:w-7/12 xl:mr-4 w-full">
            <p className="text-gray-500 scale-95 py-8 border-b border-grey-500">
              Place: {search} - Guests: {guests} - startDate: {sDay}/{sMonth}/
              {sYear} - endDate: {eDay}/{eMonth}/{eYear}
            </p>
            {places.map((place: IPlace) => (
              <Place key={place.title} place={place} />
            ))}
          </div>
          <div className="hidden xl:inline xl:w-1/3 xl:ml-4 h-[50vw] sm:right-16 fixed overflow-hidden">
            <Map places={places} />
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({
  query,
}: {
  query: {
    guests: string;
  };
}) {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://airbnb-clone-leolikestocode.vercel.app";
  return {
    props: {
      places: await fetch(`${baseUrl}/api/data?guests=${query.guests}`).then(
        (res) => res.json()
      ),
    },
  };
}

export default Places;

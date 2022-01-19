import { useSession } from "next-auth/react";

import { IPlace } from "../../types/general";
import Header from "../components/Header";
import Place from "../components/Place";

const Places = ({ places }: { places: IPlace[] }) => {
  const { data: session } = useSession();
  console.log("topSearch", places, session);
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <Header />
        <div className="flex flex-col">
          {places.map((place: IPlace) => (
            <Place key={place.title} place={place} />
          ))}
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

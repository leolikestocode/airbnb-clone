const items = [
  {
    image:
      "https://a0.muscache.com/im/pictures/0538dab4-a0fc-4035-b6b2-40fa3532ee7b.jpg?im_q=highq&im_w=720",
    title: "São Sebastião",
    distance: 90,
    color: "rgb(204, 45, 74)",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/12c42722-4e5a-4c2b-b6a1-ae6ddca46395.jpg?im_q=highq&im_w=720",
    title: "Praia Grande",
    distance: 19,
    color: "rgb(188, 26, 110)",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/2d80dcb3-cbe3-4414-ac0f-3a6af22b9ab3.jpg?im_q=highq&im_w=720",
    title: "Guarujá",
    distance: 140,
    color: "rgb(175, 87, 103)",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/db8167f7-5c57-4684-80ae-4350c73e45ef.jpg?im_q=highq&im_w=720",
    title: "Ubatuba",
    distance: 48,
    color: "rgb(70, 10, 21)",
  },
];
function Inspirations() {
  return (
    <div className="my-10">
      <h2 className="text-bold text-3xl mb-7">
        Inspiration for your next trip
      </h2>
      <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-3 lg:space-x-6">
        {items.map((item) => (
          <li
            key={item.title}
            className="flex flex-col rounded-xl overflow-hidden"
          >
            <img src={item.image} alt={item.title} />
            <div
              className="p-8 flex flex-col text-white"
              style={{ backgroundColor: item.color }}
            >
              <p className="text-xl">{item.title}</p>
              <p className="text-sm">{item.distance} kilometers away</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inspirations;

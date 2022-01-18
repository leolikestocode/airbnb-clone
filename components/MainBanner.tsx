function MainBanner() {
  return (
    <picture>
      <source
        srcSet="
                https://a0.muscache.com/im/pictures/f1502649-e034-40ab-9fed-7992b7d550c6.jpg?im_w=1200 1x,
                https://a0.muscache.com/im/pictures/f1502649-e034-40ab-9fed-7992b7d550c6.jpg?im_w=2560 2x
              "
        media="(min-width: 1440px)"
      />
      <source
        srcSet="
                https://a0.muscache.com/im/pictures/ce7d8ae6-977b-4031-b800-762ac4daf347.jpg?im_w=960  1x,
                https://a0.muscache.com/im/pictures/ce7d8ae6-977b-4031-b800-762ac4daf347.jpg?im_w=1920 2x
              "
        media="(min-width: 744px)"
      />
      <source
        srcSet="
                https://a0.muscache.com/im/pictures/1bb878f5-478d-47ed-98e7-f0e9549ee645.jpg?im_w=320 1x,
                https://a0.muscache.com/im/pictures/1bb878f5-478d-47ed-98e7-f0e9549ee645.jpg?im_w=720 2x
              "
        media="(min-width: 375px)"
      />
      <source
        srcSet="
                https://a0.muscache.com/im/pictures/2459fa90-5f66-4198-a8f2-43d8f8783bc2.jpg?im_w=320 1x,
                https://a0.muscache.com/im/pictures/2459fa90-5f66-4198-a8f2-43d8f8783bc2.jpg?im_w=720 2x
              "
      />
      <img
        alt="Na luz quente e acolhedora do crepúsculo, um hóspede está parado na porta de uma casa com cúpula única e acena."
        src="https://a0.muscache.com/im/pictures/2459fa90-5f66-4198-a8f2-43d8f8783bc2.jpg?im_q=highq&amp;im_w=720"
        className="rounded-xl"
      />
    </picture>
  );
}

export default MainBanner;

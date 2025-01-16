import bannerImg from "/src/assets/assets/banner.png";
export default function Banner() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 sm:py-16 py-6">
      <section className="">
        <h1 className="text-2xl font-bold md:text-5xl mb-3 sm:mb-7">
          New Releases This Week
        </h1>

        <p className="sm:mb-10 mb-5 w-full md:w-1/2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ad
          placeat doloremque sed voluptatibus sit architecto debitis, dolorum
        </p>
        <button className="bg-primary py-2 px-4 rounded-md max-sm:w-full mb-5 sm:mb-0">
          Subscribe
        </button>
      </section>

      {/* right side  */}
      <section className="md:w-1/2 w-full">
        <img src={bannerImg} />
      </section>
    </div>
  );
}

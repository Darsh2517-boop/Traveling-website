import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section id="home" className="h-screen bg-blue-600 flex items-center justify-center text-white px-6">

      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-10">
        <div className="text-center lg:text-left lg:w-1/2">

          <h1 className="text-6xl font-bold">
            Explore The World
          </h1>

          <p className="mt-5 text-xl">
            Amazing Packages At Affordable Prices
          </p>

          <a href="#packages" className="inline-block bg-orange-500 px-6 py-3 rounded mt-6">
            Explore Packages
          </a>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="Travel destination"
            className="rounded-3xl shadow-2xl max-w-full w-[420px]"
          />
        </div>
      </div>

    </section>
  );
}

export default Hero;
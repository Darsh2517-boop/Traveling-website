import React from "react";
import kashmirImage from "../assets/kashmir2.jpg";
function Destinations() {

  const destinations = [
    {
      name: "Goa",
      image:
        "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "Manali",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "Kashmir",
      image: kashmirImage
      
    },
    {
      name: "Dubai",
      image:
        "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "Bali",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
    }
  ];

  return (
    <section className="py-16 px-10">

      <h2 className="text-4xl font-bold text-center mb-10">
        Popular Destinations
      </h2>

      <div className="grid md:grid-cols-5 gap-5">

        {destinations.map((place) => (
          <div
            key={place.name}
            className="bg-white shadow-lg rounded-3xl overflow-hidden"
          >
            <img
              src={place.image}
              alt={place.name}
              className="h-44 w-full object-cover"
            />
            <div className="p-5 text-center text-xl font-semibold text-gray-800">
              {place.name}
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Destinations;
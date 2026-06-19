function PackageCard() {

  const packages = [
    {
      destination: "Goa",
      price: 15000,
      duration: "3 Days / 2 Nights",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
    },
    {
      destination: "Manali",
      price: 18000,
      duration: "4 Days / 3 Nights",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80"
    },
    {
      destination: "Dubai",
      price: 45000,
      duration: "5 Days / 4 Nights",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80"
    }
  ];

  return (
    <section id="packages" className="py-16 px-10">

      <h2 className="text-4xl font-bold text-center mb-10">
        Tour Packages
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-3xl overflow-hidden"
          >
            <img
              src={pkg.image}
              alt={pkg.destination}
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">
                {pkg.destination}
              </h3>

              <p className="text-green-600 font-bold mt-2">
                ₹{pkg.price}
              </p>

              <p className="mt-2 text-gray-600">{pkg.duration}</p>

              <button className="mt-5 bg-blue-600 text-white px-4 py-2 rounded">
                Enquire Now
              </button>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}

export default PackageCard;
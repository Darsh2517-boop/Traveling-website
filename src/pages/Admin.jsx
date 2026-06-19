import { useState } from "react";

function Admin() {
  const [formData, setFormData] = useState({
    agencyName: "",
    heroTitle: "",
    destinationName: "",
    packagePrice: "",
    tripDuration: "",
    packageDescription: "",
    offerText: "",
    reviewText: "",
    enquiryButtonText: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Data Saved Successfully!");

    // Later:
    // axios.post("http://localhost:5000/api/admin", formData)
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Travel Agency Admin Panel
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Agency Name */}
          <div>
            <label className="block font-semibold mb-2">
              Agency Name
            </label>
            <input
              type="text"
              name="agencyName"
              value={formData.agencyName}
              onChange={handleChange}
              placeholder="Enter Agency Name"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          {/* Hero Title */}
          <div>
            <label className="block font-semibold mb-2">
              Hero Title
            </label>
            <input
              type="text"
              name="heroTitle"
              value={formData.heroTitle}
              onChange={handleChange}
              placeholder="Explore The World"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          {/* Destination Name */}
          <div>
            <label className="block font-semibold mb-2">
              Destination Name
            </label>
            <input
              type="text"
              name="destinationName"
              value={formData.destinationName}
              onChange={handleChange}
              placeholder="Goa"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          {/* Package Price */}
          <div>
            <label className="block font-semibold mb-2">
              Package Price
            </label>
            <input
              type="number"
              name="packagePrice"
              value={formData.packagePrice}
              onChange={handleChange}
              placeholder="15000"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          {/* Trip Duration */}
          <div>
            <label className="block font-semibold mb-2">
              Trip Duration
            </label>
            <input
              type="text"
              name="tripDuration"
              value={formData.tripDuration}
              onChange={handleChange}
              placeholder="3 Days / 2 Nights"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          {/* Package Description */}
          <div>
            <label className="block font-semibold mb-2">
              Package Description
            </label>
            <textarea
              name="packageDescription"
              value={formData.packageDescription}
              onChange={handleChange}
              rows="4"
              placeholder="Enter Package Description"
              className="w-full border p-3 rounded-lg"
            ></textarea>
          </div>

          {/* Offer Text */}
          <div>
            <label className="block font-semibold mb-2">
              Offer Text
            </label>
            <input
              type="text"
              name="offerText"
              value={formData.offerText}
              onChange={handleChange}
              placeholder="20% OFF"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          {/* Review Text */}
          <div>
            <label className="block font-semibold mb-2">
              Review Text
            </label>
            <textarea
              name="reviewText"
              value={formData.reviewText}
              onChange={handleChange}
              rows="3"
              placeholder="Amazing Experience!"
              className="w-full border p-3 rounded-lg"
            ></textarea>
          </div>

          {/* Enquiry Button Text */}
          <div>
            <label className="block font-semibold mb-2">
              Enquiry Button Text
            </label>
            <input
              type="text"
              name="enquiryButtonText"
              value={formData.enquiryButtonText}
              onChange={handleChange}
              placeholder="Enquire Now"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block font-semibold mb-2">
              Contact Number
            </label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="+91 9876543210"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
          >
            Save Data
          </button>

        </form>
      </div>
    </div>
  );
}

export default Admin;
function Enquiry() {
  return (
    <section className="py-16">

      <h2 className="text-4xl font-bold text-center mb-10">
        Enquiry Form
      </h2>

      <form className="max-w-xl mx-auto space-y-4">

        <input
          type="text"
          placeholder="Name"
          className="w-full border p-3"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3"
        />

        <input
          type="text"
          placeholder="Phone"
          className="w-full border p-3"
        />

        <textarea
          placeholder="Message"
          className="w-full border p-3"
        ></textarea>

        <button className="bg-green-600 text-white px-6 py-3 rounded">
          Send Enquiry
        </button>

      </form>

    </section>
  );
}

export default Enquiry;
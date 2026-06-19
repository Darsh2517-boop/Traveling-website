function Navbar() {
  return (
    <nav className="sticky top-0 bg-white shadow-md p-5 flex justify-between">
      <h1 className="text-2xl font-bold text-blue-600">
        TravelPro
      </h1>

      <ul className="flex gap-6">
        <li>Home</li>
        <li>Packages</li>
        <li>Reviews</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
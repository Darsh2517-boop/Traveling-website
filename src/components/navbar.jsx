function Navbar() {
  return (
    <nav className="sticky top-0 bg-white shadow-md p-5 flex justify-between">
      <h1 className="text-2xl font-bold text-blue-600">
        TravelPro
      </h1>

      <ul className="flex gap-6">
        <li>
          <a href="#home" className="hover:text-blue-600">
            Home
          </a>
        </li>
        <li>
          <a href="#packages" className="hover:text-blue-600">
            Packages
          </a>
        </li>
        <li>
          <a href="#reviews" className="hover:text-blue-600">
            Reviews
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
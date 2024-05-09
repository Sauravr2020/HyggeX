function Navbar() {
  return (
    <nav className="bg-white">
      <div className="container mx-auto px-8 flex justify-between items-center py-4">
        <div className="flex items-center">
          <div className="text-indigo-900 font-bold text-2xl">HyggeX</div>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Flashcard
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              FAQ
            </a>
          </li>
          <li>
            <button className="bg-indigo-900 hover:bg-blue-700 text-white font-bold py-0.5 px-6 rounded-full">
              Login
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

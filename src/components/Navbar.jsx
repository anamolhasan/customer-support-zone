const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Left Side Logo */}
        <div className="text-2xl font-bold text-gray-800">
          TicketSystem
        </div>

        {/* Right Side Menu */}
        <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <button className="hover:text-black">Home</button>
          <button className="hover:text-black">FAQ</button>
          <button className="hover:text-black">Changelog</button>
          <button className="hover:text-black">Blog</button>
          <button className="hover:text-black">Download</button>
          <button className="hover:text-black">Contact</button>

          {/* New Ticket Button */}
          <button className="ml-4 px-5 py-2 rounded-md text-white font-semibold
            bg-gradient-to-r from-[#422AD5] to-[#6A5AE0]
            hover:opacity-90 transition">
            New Ticket
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/vite.svg" alt="Logo" className="h-8 w-8" />
          <h1 className="text-xl font-bold text-gray-800">Mera Monitor</h1>
        </div>

        {/* Nav Links or Button */}
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm font-medium">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

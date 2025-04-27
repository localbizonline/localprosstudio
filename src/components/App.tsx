<nav className="sticky top-0 w-full bg-black z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Local Pros Studio" className="h-8 w-auto" width="120" height="32" />
            </Link>
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-200 transition-colors md:ml-4"
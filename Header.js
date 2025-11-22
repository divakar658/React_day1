function Header() {
  return (
    <div className="header">
      {/* Left - Logo */}
      <div className="logo">
        <img src="https://via.placeholder.com/50" alt="logo" />
      </div>

      {/* Middle - Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>

      {/* Right - User Icon */}
      <div className="user-icon">
        <img src="https://via.placeholder.com/40" alt="user" />
      </div>
    </div>
  );
}

export default Header;

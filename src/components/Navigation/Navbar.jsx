import React, { useEffect, useState } from "react";
import "./Navbar.css"
const Navbar = () => {
  const handleResumeDownload = () => {
    // Replace with your actual PDF file path
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Arnab_Resume.pdf";
    link.click();
  };

  const centerLinks = [
    { label: "Work", path: "#work" },
    { label: "About", path: "#about" },
    { label: "Contact Me", path: "#contact" },
  ];

  const [activeKey, setActiveKey] = useState(() => window.location.hash || window.location.pathname || "/");

  useEffect(() => {
    const onHashChange = () => setActiveKey(window.location.hash || window.location.pathname);
    const onPop = () => setActiveKey(window.location.hash || window.location.pathname);
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("popstate", onPop);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("popstate", onPop);
    };
  }, []);

  function isActive(path) {
    if (!path) return false;
    if (path.startsWith("#")) return activeKey === path;
    if (path === "/") return activeKey === "/" || activeKey === "";
    return activeKey === path;
  }

  return (
    <nav className="navbar">
      {/* Left Side (can hold logo or name) */}
      <div className="navbar-left">
        <a href="/" className={isActive("/") ? "nav-link active" : "nav-link"}>Arnab</a>
      </div>

      {/* Center - primary navigation */}
      <div className="navbar-center">
        {centerLinks.map((it) => (
          <a
            key={it.path}
            href={it.path}
            className={isActive(it.path) ? "nav-link active" : "nav-link"}
            onClick={() => {
              if (it.path.startsWith("#")) setActiveKey(it.path);
            }}
          >
            {it.label}
          </a>
        ))}
      </div>

      {/* Right Side */}
      <div className="navbar-right">
        <button className="resume-btn" onClick={handleResumeDownload}>
          Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
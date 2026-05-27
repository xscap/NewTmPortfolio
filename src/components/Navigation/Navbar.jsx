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
    { label: "About", path: "#about" },
    { label: "Work", path: "#work" },
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
        <a href="/" className="mother-nav-link">Arnab</a>
      </div>

      <input type="checkbox" id="checkbox" className="nav-checkbox" />
      <label htmlFor="checkbox" className="toggle" aria-label="Toggle navigation menu">
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
      </label>

      {/* Center - primary navigation */}
      <div className="navbar-center">
        {centerLinks.map((it) => (
          <a
            key={it.path}
            href={it.path}
            className={isActive(it.path) ? "nav-link active" : "nav-link"}
            onClick={() => {
              if (it.path.startsWith("#")) setActiveKey(it.path);
              const checkbox = document.getElementById("checkbox");
              if (checkbox) checkbox.checked = false;
            }}
          >
            {it.label}
          </a>
        ))}
        <button
          className="resume-btn mobile-resume-btn"
          onClick={() => {
            handleResumeDownload();
            const checkbox = document.getElementById("checkbox");
            if (checkbox) checkbox.checked = false;
          }}
        >
          Resume
        </button>
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
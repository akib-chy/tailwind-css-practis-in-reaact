import React, { useState } from "react";
import Link from "../Link/Link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const link = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Blogs", link: "/blogs" },
    { id: 4, name: "Contact", link: "/contact" },
    { id: 5, name: "Other", link: "/other" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div onClick={() => setOpen(!open)} className="w-10 h-10 md:hidden">
        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
      </div>
      <ul
        className={`md:flex justify-center absolute ${
          open ? "top-6" : "top-[-120px]"
        }`}
      >
        {link.map((item) => (
          <Link item={item} key={item.id}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

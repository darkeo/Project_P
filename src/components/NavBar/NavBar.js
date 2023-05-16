import React from "react";
import NavBarCSS from "./Navbar.module.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

function NavBar() {
  const HomeData = [
    { label: "Accueil", value: "accueil", url: "/flex" },
    { label: "Qui sommes nous ?", value: "who?", url: "#" },
    { label: "Présentation", value: "presentation", url: "/home" }
  ];

  const AboutData = [
    { label: "Notre Philosophie", value: "philosophy", url: "#" },
    { label: "Actualités", value: "actualites", url: "#" },
    { label: "FAQ", value: "faq", url: "#" }
  ];

  const ServicesData = [
    { label: "Catalogue", value: "accueil", url: "#" },
    { label: "Produits", value: "produits", url: "#" },
    { label: "Comparateur", value: "comp", url: "#" }
  ];

  const ContactData = [
    { label: "Contact", value: "contact", url: "#" },
    { label: "Références", value: "ref", url: "#" }
  ];
  return (
    <nav className={NavBarCSS.backgroundNav}>
      <ul className={NavBarCSS.navbar}>
        <li>
          <DropdownMenu dropDownData={HomeData} name={"Home"} />
        </li>
        <li>
          <DropdownMenu dropDownData={AboutData} name={"About"} />
        </li>
        <li>
          <DropdownMenu dropDownData={ServicesData} name={"Services"} />
        </li>
        <li>
          <DropdownMenu dropDownData={ContactData} name={"Contact"} />
        </li>

        <li className={NavBarCSS.rightLink}>
          <a href="/auth">S'identifier</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo1.jpg";
import SearchIcon from "@material-ui/icons/Search"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "rgba(0,0,0,0.5)",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Packages",
  link3Text: "Contact",
  link4Text: "Login",
  link1Url: "/",
  link2Url: "/packages",
  link3Url: "/contact",
  link4Url: "/Login",
  link1Size: "1.3vmax",
  link1Color: "#fff",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "#fff",
  searchIconColor: "#fff",
  cartIconColor: "#fff",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
  searchIcon:true,
  SearchIconElement:SearchIcon,
  cartIcon:true,
  CartIconElement:ShoppingCartIcon,
  // profileIcon:true,
  // ProfileIconElement:PersonOutlineIcon,

  


  
  
};
const Header = () => {
  return <ReactNavbar {...options}  />;
};

export default Header;

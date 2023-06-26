import React from "react";
import { FeaturedCars } from "../../components/featuredCars/FeaturedCars";
import { Footer } from "../../components/footer/Footer";
import { Intro } from "../../components/intro/Intro";
import { Navbar } from "../../components/navbar/Navbar";
import { RentProcess } from "../../components/rentProcess/RentProcess";
import { SearchBar } from "../../components/searchBar/SearchBar";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <SearchBar />
      <FeaturedCars />
      <RentProcess />
      <Footer />
    </div>
  );
};

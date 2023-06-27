import React from "react";
import { FilterBy } from "../../components/filterBy/FilterBy";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import { SearchBar } from "../../components/searchBar/SearchBar";

export const AllCars = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <FilterBy />
      <Footer />
    </div>
  );
};

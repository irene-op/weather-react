import React from "react";
import "./App.css";

export default function Search() {
  return (
    <div className="search">
      <form id="search-city-form">
        <input type="search" placeholder="Type city name" id="city-input" />
        <input
          className="buttons"
          id="search-button"
          type="submit"
          value="Search"
        />
        <button className="buttons" id="your-location-button">
          Your location
        </button>
      </form>
    </div>
  );
}

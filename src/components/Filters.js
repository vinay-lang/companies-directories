import React from "react";
import "./Filters.css";

function Filters({ search, setSearch, location, setLocation, industry, setIndustry }) {
  return (
    <div className="filters-container">
      
      {/* Search by name */}
      <input
        type="text"
        placeholder="Search by company name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filter by location */}
      <select value={location} onChange={(e) => setLocation(e.target.value)}>
        <option value="">All Locations</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
      </select>

      {/* Filter by industry */}
      <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
        <option value="">All Industries</option>
        <option value="Information Technology">Information Technology</option>
        <option value="Agriculture">Agriculture</option>
        <option value="Aviation">Aviation</option>
        <option value="Finance">Finance</option>
      </select>

    </div>
  );
}

export default Filters;

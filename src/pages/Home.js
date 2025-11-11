import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import companies from "../data/companies.json";
import CompanyCard from "../components/CompanyCard";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const trending = companies.slice(0,6);

  function handleSearch(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(`/companies?search=${encodeURIComponent(query)}`);
    }, 950);
  }

  return (
    <>
      <Navbar />
      <main className="home-hero">
        <div className="container hero-inner">
          <div className="hero-left">
            <h2>Discover companies worldwide</h2>
            <p className="muted">Search by name, location, or industry — curated list of 50+ companies.</p>

            <form onSubmit={handleSearch} className="hero-search">
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search companies, e.g. 'FinTech' or 'Bangalore'"/>
              <button type="submit">Search</button>
            </form>

            {loading && <Loader text="Finding companies" />}
          </div>

          <div className="hero-right">
            <h4>Trending companies</h4>
            <div className="trending-grid">
              {trending.map((c) => <CompanyCard key={c.id} company={c} />)}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

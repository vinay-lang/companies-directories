import React, { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CompanyCard from "../components/CompanyCard";
import Loader from "../components/Loader";
import companiesData from "../data/companies.json";
import "./CompaniesPage.css";

// ❌ Removed groupByCountry since it's unused (to fix Netlify build error)
// function groupByCountry(list) {
//   return list.reduce((acc, item) => {
//     acc[item.country] = acc[item.country] || [];
//     acc[item.country].push(item);
//     return acc;
//   }, {});
// }

export default function CompaniesPage() {
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const companiesPerPage = 12;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setCompanies(companiesData);
      setLoading(false);
    }, 600);
  }, []);

  const filtered = useMemo(() => {
    return companies.filter((c) => {
      const matchesSearch =
        !search ||
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.industry.toLowerCase().includes(search.toLowerCase()) ||
        c.location.toLowerCase().includes(search.toLowerCase()) ||
        c.country.toLowerCase().includes(search.toLowerCase());
      const matchesLocation = location ? c.location === location : true;
      const matchesIndustry = industry ? c.industry === industry : true;
      return matchesSearch && matchesLocation && matchesIndustry;
    });
  }, [companies, search, location, industry]);

  // const grouped = useMemo(() => groupByCountry(filtered), [filtered]); // ❌ removed unused line

  // ✅ Pagination logic
  const pageCount = Math.ceil(filtered.length / companiesPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * companiesPerPage,
    currentPage * companiesPerPage
  );

  const handlePageChange = (num) => setCurrentPage(num);

  return (
    <>
      <Navbar />
      <main className="container" style={{ paddingTop: 28 }}>
        <div className="controls">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, industry, or location..."
          />
          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="">All Locations</option>
            {[...new Set(companies.map((c) => c.location))].map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
          <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
            <option value="">All Industries</option>
            {[...new Set(companies.map((c) => c.industry))].map((ind) => (
              <option key={ind} value={ind}>
                {ind}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <Loader text="Loading companies" />
        ) : filtered.length === 0 ? (
          <div className="no-results">
            <h3>No companies found</h3>
            <p>Try a different keyword or clear filters.</p>
          </div>
        ) : (
          <>
            <div className="company-grid">
              {paginated.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>

            {/* ✅ Pagination Controls */}
            <div className="pagination">
              {Array.from({ length: pageCount }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={currentPage === i + 1 ? "active" : ""}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </main>

      <Footer />
    </>
  );
}

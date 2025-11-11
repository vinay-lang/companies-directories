import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import companies from "../data/companies.json";
import { FaArrowLeft } from "react-icons/fa";
import "./CompanyDetails.css";

export default function CompanyDetails() {
  const { id } = useParams();
  const company = companies.find((c) => c.id === parseInt(id));

  if (!company) {
    return (
      <>
        <Navbar />
        <div className="not-found-page">
          <h2>Company not found</h2>
          <Link to="/companies" className="back-btn">Back to Directory</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="container company-details">
        <Link to="/companies" className="back-btn">
          <FaArrowLeft /> Back
        </Link>
        <div className="details-card">
          <h2>{company.name}</h2>
          <p><strong>Industry:</strong> {company.industry}</p>
          <p><strong>Location:</strong> {company.location}</p>
          <p><strong>Country:</strong> {company.country}</p>
          <p><strong>About:</strong> This is a placeholder company profile page for <b>{company.name}</b> in the <b>{company.industry}</b> sector, located in <b>{company.location}</b>.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

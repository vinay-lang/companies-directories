import React from "react";
import { Link } from "react-router-dom"; // ✅ import Link for navigation
import "./CompanyCard.css";
import {
  FaLaptopCode,
  FaLeaf,
  FaPlane,
  FaMoneyBillWave,
  FaHospital,
  FaIndustry,
  FaBox,
} from "react-icons/fa";

function CompanyCard({ company }) {
  const getIcon = (industry) => {
    if (/tech|information|software|fintech|analytics/i.test(industry)) return <FaLaptopCode />;
    if (/agri|farm/i.test(industry)) return <FaLeaf />;
    if (/aviation|airline|aero/i.test(industry)) return <FaPlane />;
    if (/finance|bank|capital|money|insurance/i.test(industry)) return <FaMoneyBillWave />;
    if (/health|medical|clinic/i.test(industry)) return <FaHospital />;
    if (/manufactur|auto|industrial/i.test(industry)) return <FaIndustry />;
    return <FaBox />;
  };

  return (
    // ✅ Make the entire card clickable and navigate to the company details page
    <Link to={`/companies/${company.id}`} className="company-card">
      <div className="company-top">
        <div className="icon">{getIcon(company.industry)}</div>
        <h3 className="company-name">{company.name}</h3>
      </div>

      <div className="company-meta">
        <div><strong>Location:</strong> {company.location}</div>
        <div><strong>Country:</strong> {company.country}</div>
        <div><strong>Industry:</strong> {company.industry}</div>
      </div>
    </Link>
  );
}

export default CompanyCard;

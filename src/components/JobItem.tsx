import React from "react";


import companyIcon from "../assets/Company.png";
import roleIcon from "../assets/role.png";
import dateIcon from "../assets/Date-applied.png";

interface JobListItemProps{
  company: string;
  role: string;
  dateApplied: string;
  statusImage: string;
};

const JobListItem = ({ company, role, dateApplied, statusImage } :JobListItemProps) => {
  return (
    <div className="job-list-item">
      <div className="job-info">
        <div className="job-text">
          <div className="job-field">
            <img src={companyIcon} alt="company icon" className="job-icon" />
            <span className="company">{company}</span>
          </div>
          <div className="job-field">
            <img src={roleIcon} alt="role icon" className="job-icon" />
            <span className="role">{role}</span>
          </div>
          <div className="job-field">
            <img src={dateIcon} alt="date icon" className="job-icon" />
            <span className="date-applied">{dateApplied}</span>
          </div>
        </div>
        <img src={statusImage} alt="status" className="status-img" />
      </div>
    </div>
  );
};

export default JobListItem;

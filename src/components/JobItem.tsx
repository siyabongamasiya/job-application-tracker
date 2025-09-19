import React from "react";

import companyIcon from "../assets/Company.png";
import roleIcon from "../assets/role.png";
import dateIcon from "../assets/Date-applied.png";

interface JobListItemProps {
  company: string;
  role: string;
  dateApplied: string;
  statusImage: string;
  onClick() : void;
}

const JobListItem = ({
  company,
  role,
  dateApplied,
  statusImage,
  onClick
}: JobListItemProps) => {
  return (
    <div className="job-list-item" onClick={onClick}>
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
        <div id="status-container">
          <img src={statusImage} alt="status" className="status-img" />
        </div>
      </div>
    </div>
  );
};

export default JobListItem;

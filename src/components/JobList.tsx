import React from "react";
import JobListItem from "./JobItem";

import testImage from "../assets/Frame 36-2.png";
const jobs = [
  {
    id: 1,
    company: "ABC Corp",
    role: "Frontend Developer",
    dateApplied: "2025-09-17",
    statusImage: testImage,
  },
  {
    id: 2,
    company: "XYZ Ltd",
    role: "Backend Developer",
    dateApplied: "2025-09-10",
    statusImage: testImage,
  },
  {
    id: 3,
    company: "Tech Solutions",
    role: "Fullstack Developer",
    dateApplied: "2025-09-12",
    statusImage: testImage,
  },
  {
    id: 4,
    company: "Design Studio",
    role: "UI/UX Designer",
    dateApplied: "2025-09-14",
    statusImage: testImage,
  },
];

const JobList = () => {
  return (
    <div className="job-list-container">
      {jobs.map((job) => (
        <JobListItem
          key={job.id}
          company={job.company}
          role={job.role}
          dateApplied={job.dateApplied}
          statusImage={job.statusImage}
        />
      ))}
    </div>
  );
};

export default JobList;

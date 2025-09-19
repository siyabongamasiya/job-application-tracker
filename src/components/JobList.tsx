import React from "react";
import JobListItem from "./JobItem";
import type Job from "../models/Job";
import pending from "../assets/Frame 36-2.png";
import rejected from "../assets/Frame 36-1.png";
import accepted from "../assets/Frame 36.png";
import { useNavigate } from "react-router-dom";

interface JobListProps {
  jobs: Job[];
}

const JobList = ({ jobs }: JobListProps) => {
  const navigate = useNavigate();

  return (
    <div className="job-list-container">
      {jobs.map((job) => {
        const status = job.status;
        let image = pending;
        if (status === "accepted") {
          image = accepted;
        } else if (status === "rejected") {
          image = rejected;
        } else {
          image = pending;
        }
        return (
          <JobListItem
            key={job.id}
            company={job.company}
            role={job.role}
            dateApplied={job.dateApplied}
            statusImage={image}
            onClick={() => {
              navigate(`/jobdetails/${job.id}`);
            }}
          />
        );
      })}
    </div>
  );
};

export default JobList;

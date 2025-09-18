import React from "react";
import JobListItem from "./JobItem";


import type Job from "../models/Job";

interface JobListProps {
  jobs:Job[]
}

const JobList = ({jobs} : JobListProps) => {
  return (
    <div className="job-list-container">
      {jobs.map((job) => (
        <JobListItem
          key={job.id}
          company={job.company}
          role={job.role}
          dateApplied={job.dateApplied}
          statusImage={job.status}
        />
      ))}
    </div>
  );
};

export default JobList;

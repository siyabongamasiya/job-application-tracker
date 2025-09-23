import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Job from "../models/Job";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
import DataAccesObject from "../data/dao";
import JobModal from "../components/JobFormModal";

const dao = new DataAccesObject();

interface MidSectionProps {
  jobId: string;
}

export default function JobDetailsPage() {
  type URLParams = { jobId: string };
  const { jobId } = useParams<URLParams>();

  return (
    <div>
      <TopSection />
      <MidSection jobId={jobId!} />
    </div>
  );
}

const TopSection = () => {
  return (
    <div>
      <NavBar title="Job Details" hasBackButton={false} />
    </div>
  );
};

const MidSection = ({ jobId }: MidSectionProps) => {
  const [currentJob, setCurrentJob] = useState<Job>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dao.getJobById(jobId).then((job) => {
      setCurrentJob(job);
    });
  }, [isModalOpen]);

  return (
    <div id="job-details-container">
      <div id="job-details-1" className="details-container">
        <p>
          Company: <span className="details-span">{currentJob?.company}</span>
        </p>
        <p>
          Role: <span className="details-span">{currentJob?.role}</span>
        </p>
        <p>
          Status: <span className="details-span">{currentJob?.status}</span>
        </p>
        <p>
          Date Applied:
          <span className="details-span">{currentJob?.dateApplied}</span>
        </p>
      </div>

      <div id="job-details-buttons-container">
        <Button
          text="Edit Job"
          onClick={() => {
            setIsModalOpen(true);
          }}
          style={{
            marginLeft: "10%",
            padding: "0.75rem",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "var(--primary)",
            color: "var(--background)",
            fontFamily: "var(--buttons-navLinks-font)",
            fontWeight: "var(--buttons-navLinks-weight)",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        />
        <Button
          text="Delete Job"
          onClick={async () => {
            await dao.deleteJob(currentJob!.id);
            navigate("/");
          }}
          style={{
            marginLeft: "10%",
            padding: "0.75rem",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "var(--accent)",
            color: "var(--background)",
            fontFamily: "var(--buttons-navLinks-font)",
            fontWeight: "var(--buttons-navLinks-weight)",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        />
      </div>

      <JobModal
        isEditMode={true}
        editedJobId={jobId}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          
        }}
      />
    </div>
  );
};

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
      <div className="job-details-card">
        <h2 className="job-details-title">Job Details</h2>

        <div className="job-details-info">
          <p>
            <strong>Company:</strong>{" "}
            <span className="details-span">{currentJob?.company}</span>
          </p>
          <p>
            <strong>Role:</strong>{" "}
            <span className="details-span">{currentJob?.role}</span>
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span className="details-span">{currentJob?.status}</span>
          </p>
          <p>
            <strong>Date Applied:</strong>{" "}
            <span className="details-span">{currentJob?.dateApplied}</span>
          </p>
        </div>

        <div className="job-details-actions">
          <Button
            text="Edit Job"
            onClick={() => setIsModalOpen(true)}
            style={{ backgroundColor: "var(--primary)" }}
          />
          <Button
            text="Delete Job"
            onClick={async () => {
              await dao.deleteJob(currentJob!.id);
              navigate("/");
            }}
            style={{ backgroundColor: "var(--accent)" }}
          />
        </div>
      </div>

      <JobModal
        isEditMode={true}
        editedJobId={jobId}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

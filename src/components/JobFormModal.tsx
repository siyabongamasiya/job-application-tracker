import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

type JobModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: {
    company: string;
    role: string;
    dateApplied: string;
  }) => void;
};

const JobModal: React.FC<JobModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [dateApplied, setDateApplied] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ company, role, dateApplied });
    setCompany("");
    setRole("");
    setDateApplied("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="job-modal-backdrop">
      <div className="job-modal-container">
        <h2 style={{ marginBottom: "1rem" }}>Add Job</h2>
        <form onSubmit={handleSubmit} className="job-modal-form">
          <InputField
            label="Company"
            value={company}
            placeholder="Company"
            onChange={(e) => setCompany(e.target.value)}
          />
          <InputField
            label="Role"
            value={role}
            placeholder="Role"
            onChange={(e) => setRole(e.target.value)}
          />
          <InputField
            label="Date Applied"
            value={dateApplied}
            onChange={(e) => setDateApplied(e.target.value)}
            placeholder="YYYY-MM-DD" 
          />
          <Button
            text="Submit"
            onClick={() => {}}
            style={{ backgroundColor: "#3B82F6", width: "100%" }}
          />
        </form>
        <button onClick={onClose} className="job-modal-close">
          X
        </button>
      </div>
    </div>
  );
};

export default JobModal;

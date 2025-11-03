import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import DataAccesObject from "../data/dao";
import type User from "../models/User";
import Job from "../models/Job";
import { generateJobId } from "../utils/IdGenerator";

const dao = new DataAccesObject();

interface JobModalProps {
  isOpen: boolean;
  editedJobId?: string;
  isEditMode?: boolean;
  onClose: () => void;
  onSubmit?: () => void;
}

const JobModal = ({
  isOpen,
  isEditMode = false,
  editedJobId = "",
  onClose,
  onSubmit,
}: JobModalProps) => {
  const [currentuser, setCurrentUser] = useState<User | null>(
    dao.getCurrentUserFromLocalStorage()
  );
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [dateApplied, setDateApplied] = useState("");

  const handleSubmit = () => {
    onSubmit!();
    setCompany("");
    setRole("");
    setDateApplied("");
    onClose();
  };

  const setCurrentValuesIfEdit = async (jobId: string) => {
    if (!currentuser) return;

    if (isEditMode) {
      await dao.getUserById(currentuser.id.toString()).then((user: User) => {
        const jobToEdit = user.jobs.find((job) => job.id === jobId);

        if (jobToEdit) {
          setCompany(jobToEdit.company);
          setRole(jobToEdit.role);
          setDateApplied(jobToEdit.dateApplied);
        }
      });
    }
  };

  useEffect(() => {
    setCurrentValuesIfEdit(editedJobId);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="job-modal-backdrop">
      <div className="job-modal-container">
        <h2 style={{ marginBottom: "1rem" }}>Add Job</h2>
        <div className="job-modal-form">
          <InputField
            label="Company"
            value={company}
            type="text"
            placeholder="Company"
            onChange={(newValue) => setCompany(newValue)}
          />
          <InputField
            label="Role"
            value={role}
            type="text"
            placeholder="Role"
            onChange={(newValue) => setRole(newValue)}
          />
          <InputField
            label="Date Applied"
            value={dateApplied}
            type="Date"
            onChange={(newValue) => setDateApplied(newValue)}
            placeholder="YYYY-MM-DD"
          />
          <Button
            text={isEditMode ? "Edit" : "Submit"}
            onClick={() => {
              if (!isEditMode) {
                dao
                  .addJob(Number.parseInt(currentuser?.id!), {
                    id: generateJobId(company, role),
                    company,
                    role,
                    dateApplied,
                    status: "pending",
                  } as Job)
                  .then(() => {
                    handleSubmit();
                  });
              } else {
                dao.editJob(onClose,editedJobId, { company, role, dateApplied });
              }
            }}
            style={{
              width: "70%",
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
        </div>
        <button onClick={onClose} className="job-modal-close">
          X
        </button>
      </div>
    </div>
  );
};

export default JobModal;

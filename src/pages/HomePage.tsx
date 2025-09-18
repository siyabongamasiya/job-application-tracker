import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import DateFilter from "../components/DateFilter";
import Footer from "../components/Footer";

import JobList from "../components/JobList";
import JobModal from "../components/JobFormModal";
import Job from "../models/Job";
import DataAccesObject from "../data/dao";
import User from "../models/User";
import { useNavigate } from "react-router-dom";

const dao = new DataAccesObject();
interface MidSectionProps {}

export default function HomePage() {
  return (
    <div id="hompepage">
      <TopSection />
      <MidSection />
      <Footer />
    </div>
  );
}

const TopSection = () => {
  return (
    <div>
      <NavBar title="Home" hasBackButton={false} />
    </div>
  );
};
const MidSection = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(
    dao.getCurrentUserFromLocalStorage()
  );
  const navigate = useNavigate();

  const getJobs = () => {
    if (!currentUser) {
      navigate("/register");
      return;
    } else {
      dao.getUserById(currentUser.id.toString()).then((user: User) => {
        setJobs(user.jobs);
      });
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div>
      <JobModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        onSubmit={() => {
          getJobs();
        }}
      />
      <div id="button-container-homepage">
        <Button
          text="Add new Job"
          onClick={() => {
            setIsModalOpen(true);
          }}
          style={{
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
      <div id="search-filters-container">
        <SearchBar value="" onChange={() => {}} />
        <div id="filters-container">
          <FilterBar categories={[]} category="" onFilterChange={() => {}} />
          <DateFilter />
        </div>
      </div>
      <div id="jobs-container">
        {jobs.length === 0 ? (
          <div
            className="job-list-container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100vh",
            }}
          >
            No jobs Yet!!..use the button above to add.
          </div>
        ) : (
          <JobList jobs={jobs} />
        )}
      </div>
    </div>
  );
};

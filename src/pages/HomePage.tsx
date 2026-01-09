import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import DateFilter from "../components/DateFilter";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";

import JobList from "../components/JobList";
import JobModal from "../components/JobFormModal";
import Job from "../models/Job";
import DataAccesObject from "../data/dao";
import User from "../models/User";
import { useNavigate } from "react-router-dom";

const dao = new DataAccesObject();
interface MidSectionProps {}

export default function HomePage() {
  const navigate = useNavigate();
  const dao = new DataAccesObject();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div id="hompepage">
      <TopSection onLogout={handleLogout} />
      <MidSection />
      <Footer />
    </div>
  );
}

interface TopSectionProps {
  onLogout: () => void;
}

const TopSection = ({ onLogout }: TopSectionProps) => {
  return (
    <div>
      <NavBar title="Home" hasBackButton={false} onLogout={onLogout} />
    </div>
  );
};
const MidSection = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [category, setCategory] = useState("All jobs");
  const [dateFilter, setDateFilter] = useState("");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [currentUser, setCurrentUser] = useState<User | null>(
    dao.getCurrentUserFromLocalStorage()
  );
  const navigate = useNavigate();
  const testStrings = (mainString: string, testedString: string): boolean => {
    const escaped = testedString.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escaped, "i");
    return regex.test(mainString);
  };

  const filterByCategory = (jobs: Job[]): Job[] => {
    if (category === "All jobs") return jobs;
    return jobs.filter((job) => job.status === category);
  };
  const filterBySearch = (jobs: Job[]): Job[] => {
    return jobs.filter(
      (job) =>
        testStrings(job.status, search) ||
        testStrings(job.role, search) ||
        testStrings(job.company, search) ||
        testStrings(job.dateApplied, search) ||
        search === ""
    );
  };
  const filterByDate = (jobs: Job[]): Job[] => {
    return jobs.filter(
      (job) => job.dateApplied === dateFilter || dateFilter === ""
    );
  };

  const sortJobs = (jobs: Job[]): Job[] => {
    return [...jobs].sort((a, b) => {
      const dateA = new Date(a.dateApplied).getTime();
      const dateB = new Date(b.dateApplied).getTime();
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });
  };

  const getJobs = () => {
    if (!currentUser) {
      navigate("/register");
      return;
    } else {
      setIsLoading(true);
      dao
        .getUserById(currentUser.id.toString())
        .then((user: User) => {
          const filteredJobs = filterByCategory(
            filterByDate(filterBySearch(user.jobs))
          );
          setJobs(sortJobs(filteredJobs));
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
  };

  useEffect(() => {
    getJobs();
  }, [category, dateFilter, search, sortOrder]);

  return (
    <div id="midsection-homepage-container">
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
        <SearchBar
          value={search}
          onChange={(newValue) => {
            setSearch(newValue);
          }}
        />
        <div id="filters-container">
          <FilterBar
            categories={["All jobs", "Applied", "Interviewed", "Rejected"]}
            category={category}
            onFilterChange={(newValue) => {
              setCategory(newValue);
            }}
          />
          <DateFilter
            currentDate={dateFilter}
            onDateChange={(newValue) => setDateFilter(newValue)}
          />
          <button
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            style={{
              padding: "var(--spacing-md) var(--spacing-lg)",
              borderRadius: "var(--radius-full)",
              border: "2px solid var(--accent)",
              backgroundColor: "var(--background)",
              color: "var(--text-primary)",
              fontFamily: "var(--body-text-font)",
              fontWeight: "var(--body-text-weight)",
              cursor: "pointer",
              fontSize: "var(--body-text-size)",
              transition: "all 0.2s ease",
              display: "flex",
              alignItems: "center",
              gap: "var(--spacing-sm)",
              whiteSpace: "nowrap",
            }}
          >
            Sort: {sortOrder === "asc" ? "\u2191 Oldest" : "\u2193 Newest"}
          </button>
        </div>
      </div>
      <div id="jobs-container">
        {isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "var(--spacing-2xl)",
              minHeight: "200px",
            }}
          >
            <LoadingSpinner size="large" />
          </div>
        ) : jobs.length === 0 ? (
          <div
            className="job-list-container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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

import React from "react";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import DateFilter from "../components/DateFilter";
import Footer from "../components/Footer";

import testImage from "../assets/Frame 36-2.png";
import JobList from "../components/JobList";

const jobs = [
  {
    id: 1,
    company: "ABC Corp",
    role: "Frontend Developer",
    dateApplied: "2025-09-17",
    status: testImage,
  },
  {
    id: 2,
    company: "XYZ Ltd",
    role: "Backend Developer",
    dateApplied: "2025-09-10",
    status: testImage,
  },
  {
    id: 3,
    company: "Tech Solutions",
    role: "Fullstack Developer",
    dateApplied: "2025-09-12",
    status: testImage,
  },
  {
    id: 4,
    company: "Design Studio",
    role: "UI/UX Designer",
    dateApplied: "2025-09-14",
    status: testImage,
  },
  {
    id: 5,
    company: "Design Studio",
    role: "UI/UX Designer",
    dateApplied: "2025-09-14",
    status: testImage,
  },
  {
    id: 6,
    company: "Design Studio",
    role: "UI/UX Designer",
    dateApplied: "2025-09-14",
    status: testImage,
  },
  {
    id: 7,
    company: "Design Studio",
    role: "UI/UX Designer",
    dateApplied: "2025-09-14",
    status: testImage,
  },
  {
    id: 8,
    company: "Design Studio",
    role: "UI/UX Designer",
    dateApplied: "2025-09-14",
    status: testImage,
  },
  {
    id: 9,
    company: "Design Studio",
    role: "UI/UX Designer",
    dateApplied: "2025-09-14",
    status: testImage,
  },
  {
    id: 10,
    company: "Design Studio",
    role: "UI/UX Designer",
    dateApplied: "2025-09-14",
    status: testImage,
  },
  {
    id: 11,
    company: "Design Studio",
    role: "UI/UX Designer",
    dateApplied: "2025-09-14",
    status: testImage,
  },
  {
    id: 12,
    company: "Design Studio",
    role: "UI/UX Designer",
    dateApplied: "2025-09-14",
    status: testImage,
  },
  {
    id: 13,
    company: "Design Studio",
    role: "UI/UX Designer",
    dateApplied: "2025-09-14",
    status: testImage,
  },
  {
    id: 14,
    company: "Design Studio",
    role: "UI/UX Designer",
    dateApplied: "2025-09-14",
    status: testImage,
  }
];

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
  return (
    <div>
      <div id="button-container-homepage">
        <Button
          text="Add new Job"
          onClick={() => {}}
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
        <JobList jobs={jobs} />
      </div>
    </div>
  );
};

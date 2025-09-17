import "./App.css";
import { Toaster } from "sonner";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import FilterBar from "./components/FilterBar";
import { useState } from "react";
import DateFilter from "./components/DateFilter";
import Footer from "./components/Footer";
import InputField from "./components/InputField";
import JobModal from "./components/JobFormModal";
import JobListItem from "./components/JobItem";
import testImage from "./assets/Frame 36-2.png";
import JobList from "./components/JobList";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import SearchBar from "./components/SearchBar";

function App() {
  const [category, setCategory] = useState("");
  return (
    <>
      {/* <NavBar title="Job Application Tracker" hasBackButton={false} /> */}
      {/* <Button text="Get Started" color="#3B82F6" onClick={() => {}}/> */}
      {/* <FilterBar onFilterChange={(newValue) => {setCategory(newValue)}} categories={["IT","Javascript","C++"]} category={category}/> */}
      {/* <DateFilter/> */}
      {/* <Footer/> */}
      {/* <InputField label="Username" value="" onChange={() => {}} placeholder="username"/> */}
      {/* <JobModal isOpen={true} onClose={() => {}} onSubmit={() => {}}/> */}
      {/* <JobListItem
        company="Google"
        role="Full stack dev"
        dateApplied="2025/09/14"
        statusImage={testImage}
      /> */}
      {/* <JobList/> */}
      {/* <LoginForm onSubmit={() => {}}/> */}
      {/* <RegisterForm onSubmit={() => {}}/> */}
      <SearchBar value="Helo" onChange={() => {}} placeholder="Search"/>
      <Toaster richColors />
    </>
  );
}

export default App;

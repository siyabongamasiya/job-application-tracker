import "./App.css";
import { Toaster } from "sonner";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import FilterBar from "./components/FilterBar";
import { useState } from "react";
import DateFilter from "./components/DateFilter";
import Footer from "./components/Footer";
import InputField from "./components/InputField";
import JobModal from "./components/JobFormModal"

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
      <JobModal isOpen={true} onClose={() => {}} onSubmit={() => {}}/>
      <Toaster richColors />
    </>
  );
}

export default App;

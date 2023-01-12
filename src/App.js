import "./App.css";
import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
    console.log(jobs);
  }, []);
  if (loading) {
    return (
      <section className="loading">
        <h1>Loading....</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>expirience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((elem, idx) => {
            return (
              <button
                className={`btn ${idx === value && "active"}`}
                onClick={() => setValue(idx)}
                key={elem.id}
              >
                {elem.company}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h3>{company}</h3>
          <p className="job-date">{dates}</p>
          {duties.map((duty, idx) => {
            return (
              <div className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;

import React, { useState } from "react";

/* const data = ["cpu", "ram", "ssd", "vga"]; */

function LoginControl() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);

  ///
  const [toggle, setToggle] = useState(false);
  const Toggle = () => {

    // ham thuc thi setState
    const tranToogle = () => {
      return setToggle(!toggle);
    };

    //function components render
    const Render = () => {
      if(!toggle) {
        return (<div>{toggle}</div>)
      }else return <div> xin chao moi nguoi</div>
    }

    
    return (
      <div>
        <button onClick={tranToogle}>Toggle</button>

        {/* 2 cách render ra màn hình bằng câu lệnh điều kiện */}

        <Render/> {/* render theo if else */}

        {/* toggle && <div> XIN CHAO MOI NGUOI</div> */} {/* render bằng toán tử logic */}

      </div>
    );
  };

  const handleSubmit = () => {
    setJobs((pre) => {
      const newJobs = [...pre, job];

      return newJobs;
    });
    setJob("");
  };

  return (
    <div>
      <input
        value={job}
        onChange={(e) => {
          return setJob(e.target.value);
        }}
      />

      <button onClick={handleSubmit}>Bấm vào đi</button>

      <ul>
        {jobs.map((job, index) => {
          return <li key={index}>{job}</li>;
        })}
      </ul>

      <Toggle />

    </div>
  );
}
export default LoginControl;

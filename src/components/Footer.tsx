import React from "react";

const Footer= () => {
  return (
    <footer id="footer"
    >

      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <span
          style={{
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            backgroundColor: "#10DF2F", 
            display: "inline-block",
          }}
        ></span>
        <span>Accepted</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <span
          style={{
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            backgroundColor: "#DF1013", 
            display: "inline-block",
          }}
        ></span>
        <span>Rejected</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <span
          style={{
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            backgroundColor: "#FFDE07", 
            display: "inline-block",
          }}
        ></span>
        <span>Pending</span>
      </div>
    </footer>
  );
};

export default Footer;


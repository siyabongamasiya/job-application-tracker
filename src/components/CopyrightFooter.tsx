import React from "react";

const CopyrightFooter = () => {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        textAlign: "center",
        padding: "var(--spacing-md)",
        backgroundColor: "var(--surface)",
        borderTop: "1px solid var(--border)",
        color: "var(--text-secondary)",
        fontSize: "0.875rem",
        fontFamily: "var(--body-text-font)",
      }}
    >
      © 2025 Copyright. All rights reserved.
    </footer>
  );
};

export default CopyrightFooter;

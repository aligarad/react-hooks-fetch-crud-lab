import React from "react";

function AdminNavBar({ onChangePage }) {
function AdminNavBar({ PageChange }) {
  return (
    <nav>
      <button onClick={() => onChangePage("Form")}>New Question</button>
      <button onClick={() => onChangePage("List")}>View Questions</button>
      <button onClick={() => PageChange("Form")}>New Question</button>
      <button onClick={() => PageChange("List")}>View Questions</button>
    </nav>
  );
}}
export default AdminNavBar;

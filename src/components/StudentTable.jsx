import React from "react";
import "./StudentTable.css";
import { Link } from "react-router-dom";

const StudentTable = () => {
  return (
    <div className="container">
      <h1>Student Table</h1>
      <div className="table-container">
          <Link to="/student/create" className="add-student-btn">Add new student</Link>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Place</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>New York</td>
              <td>1234567890</td>
              <td className="action-buttons">
                <button className="edit-btn">Edit</button>
                <button className="view-btn">View</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane Smith</td>
              <td>Los Angeles</td>
              <td>9876543210</td>
              <td className="action-buttons">
                <button className="edit-btn">Edit</button>
                <button className="view-btn">View</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;

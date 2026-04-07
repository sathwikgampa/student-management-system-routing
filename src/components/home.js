import React from 'react';
import { FaEdit, FaTrash, FaUserPlus, FaUserGraduate } from 'react-icons/fa';

const Home = () => {
  const students = [
    { id: "S101", name: "Gampa Sathwik", course: "Web Dev", status: "Active" },
    { id: "S102", name: "Jane Doe", course: "Data Science", status: "Pending" },
    { id: "S103", name: "John Smith", course: "UI/UX", status: "Active" },
  ];

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary fw-bold">
          <FaUserGraduate className="me-2" /> Student Dashboard
        </h2>
        <button className="btn btn-success shadow-sm">
          <FaUserPlus className="me-1" /> Add Student
        </button>
      </div>
      
      <div className="card shadow-sm border-0">
        <div className="card-body p-0">
          <table className="table table-hover mb-0">
            <thead className="table-dark">
              <tr>
                <th>Student ID</th>
                <th>Full Name</th>
                <th>Course</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id} className="align-middle">
                  <td><strong>{s.id}</strong></td>
                  <td>{s.name}</td>
                  <td>{s.course}</td>
                  <td>
                    <span className={`badge rounded-pill ${s.status === 'Active' ? 'bg-success' : 'bg-warning'}`}>
                      {s.status}
                    </span>
                  </td>
                  <td className="text-center">
                    <button className="btn btn-outline-secondary btn-sm me-2" title="Edit Student">
                      <FaEdit />
                    </button>
                    <button className="btn btn-outline-danger btn-sm" title="Delete Student">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
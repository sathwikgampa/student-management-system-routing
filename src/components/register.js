import React, { useState } from 'react';

const Register = () => {
  const [student, setStudent] = useState({ name: '', email: '', course: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Student Registered: ${student.name} for ${student.course}`);
    console.log(student);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          onChange={(e) => setStudent({...student, name: e.target.value})} 
        /><br/><br/>
        <input 
          type="email" 
          placeholder="Email" 
          onChange={(e) => setStudent({...student, email: e.target.value})} 
        /><br/><br/>
        <select onChange={(e) => setStudent({...student, course: e.target.value})}>
          <option value="">Select Course</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Electronics">Electronics</option>
        </select><br/><br/>
        <button type="submit">Register Student</button>
      </form>
    </div>
  );
};

export default Register;
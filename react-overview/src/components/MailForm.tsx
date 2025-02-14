import React, { useState } from "react";

const MailForm: React.FC = () => {
  const formId = React.useId(); 
  const [email, setEmail] = useState(""); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    alert(`Email submitted: ${email}`); 
  };

  return (
    <form id={formId} onSubmit={handleSubmit}>
      {" "}
      <label htmlFor={`${formId}-email`}>Email:</label>
      <input
        id={`${formId}-email`}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MailForm;

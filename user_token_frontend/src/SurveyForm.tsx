import axios from "axios";
import { useState } from "react";
import "./SurveyForm.css";

function SurveyForm({
  onTokenGenerated,
}: {
  onTokenGenerated: (generatedToken: string) => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    companyName: "",
    designation: "",
  });

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/users",
        formData
      );
      onTokenGenerated(response.data.token);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form className="survey-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleInputChange} required />
      </label>
      <label>
        Phone Number:
        <input type="text" name="phone" onChange={handleInputChange} required />
      </label>
      <label>
        Company Name:
        <input
          type="text"
          name="company"
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Designation:
        <input
          type="text"
          name="designation"
          onChange={handleInputChange}
          required
        />
      </label>
      <button type="submit">Generate Token</button>
    </form>
  );
}

export default SurveyForm;

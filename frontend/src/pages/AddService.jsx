import { useState } from "react";
import axios from "axios";

function AddService() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    location: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:8000/api/services/add",
        form,
        {
          headers: {
            Authorization: token
          }
        }
      );

      alert(res.data.message);
    } catch (err) {
      alert("Error adding service");
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Add Service</h2>

      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} />
        <input name="description" placeholder="Description" onChange={handleChange} />
        <input name="location" placeholder="Location" onChange={handleChange} />

        <button type="submit">Add Service</button>
      </form>
    </div>
  );
}

export default AddService;
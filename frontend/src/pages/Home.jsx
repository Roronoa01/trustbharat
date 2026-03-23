import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/services")
      .then(res => {
        console.log("SERVICES:", res.data);
        setServices(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>All Services</h2>

      {services.map((service) => (
        <div key={service._id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <p><b>Location:</b> {service.location}</p>
          <p><b>Added by:</b> {service.user?.name}</p>
        </div>
      ))}

    </div>
  );
}

export default Home;
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState({});

  useEffect(() => {
  axios.get("http://localhost:8000/api/services")
    .then(res => {
      console.log("SERVICES:", res.data);

      setServices(res.data);

      // ✅ USE res.data instead of services
      res.data.forEach(service => {
        axios.get(`http://localhost:8000/api/reviews/${service._id}`)
          .then(reviewRes => {
            console.log("REVIEWS:", reviewRes.data);

            setReviews(prev => ({
              ...prev,
              [service._id]: reviewRes.data
            }));
          })
          .catch(err => console.log(err));
      });

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

          <h4>Reviews:</h4>

          {reviews[service._id]?.length > 0 ? (
            reviews[service._id].map((rev, index) => (
              <div key={index} style={{ marginLeft: "10px" }}>
                <p><b>{rev.user?.name}</b></p>
                <p>{rev.text}</p>
                <p>⭐ {rev.rating}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet</p>
          )}

        </div>
      ))}

    </div>
  );
}

export default Home;
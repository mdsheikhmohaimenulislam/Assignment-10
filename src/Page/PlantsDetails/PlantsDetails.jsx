import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import SingleDetails from './SingleDetails';

const PlantsDetails = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    const fetchPlant = async () => {
      try {
        const res = await fetch(`http://localhost:5000/plants/${id}`);

        if (!res.ok) {
          navigate("/not-found");
          return;
        }

        const data = await res.json();
        setPlant(data);
        document.title = "Plant Details";
      } catch (error) {
        console.error("Error fetching plant:", error);
        navigate("/not-found");
      } finally {
        setLoading(false);
      }
    };

    fetchPlant();
  }, [id, navigate]);

  if (loading) return <span className="loading ml-100 loading-ring loading-xl"></span>;

  return (
    <div>
      {plant && <SingleDetails singlePlant={plant} />}
    </div>
  );
};

export default PlantsDetails;

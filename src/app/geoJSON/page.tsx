'use client'
import React, { useEffect, useState } from "react";

const MyComponent: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/prismadata");
        const jsonData = await response.json();
        setData(jsonData.data[0]);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchData();
  }, []);

  // Render your component using the fetched data
  return (
    <div>print {data}</div>
  );
};

export default MyComponent;

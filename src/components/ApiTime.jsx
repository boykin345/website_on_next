"use client";
import React, { useEffect, useState } from "react";

const ApiTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const URL = "https://worldtimeapi.org/api/timezone/Asia/Yekaterinburg";
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(JSON.stringify(data));

        setTime(new Date(data.datetime));
      } catch (error) {
        console.error("Error fetching time:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
};

export default ApiTime;

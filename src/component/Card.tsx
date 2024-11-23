"use client";
import React, { useEffect, useState } from "react";

const Card = ({
  name,
  address,
  age,
}: {
  name: string;
  address: string;
  age: number;
}) => {
  const [Weather, setWeather] = useState<number | string>("");
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=e9db67ddb0ef621cb69465985c50fce2`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      if (data.main.humidity) {
        setWeather(data.main.humidity);
      } else {
        setWeather("Data not Available");
      }

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [address]);

  return (
    <div className="border border-white m-5 flex flex-col p-1">
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Address: {address}</div>
      <div>Weather: {Weather} units</div>
    </div>
  );
};

export default Card;

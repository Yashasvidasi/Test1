"use client";
import { useEffect, useState } from "react";

const Card = ({
  name,
  address,
  age,
}: {
  name: string;
  address: string;
  age: number;
}) => {
  const [Weather, setWeather] = useState<number | string>("Loading");

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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setWeather("Loading");
    fetchData();
  }, [address]);

  return (
    <div className="border border-white m-5 mt-0 flex flex-col p-2">
      <div className="mb-2">Name: {name}</div>
      <div className="mb-2">Age: {age}</div>
      <div className="mb-2">Address: {address}</div>
      <div className="mb-2">Weather: {Weather} units</div>
    </div>
  );
};

export default Card;

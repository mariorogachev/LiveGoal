"use client";
import { useState, useEffect } from "react";

const Fixtures = ({ selectedDate }) => {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formattedDate = `${selectedDate.getFullYear()}-${(
          selectedDate.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}-${selectedDate
          .getDate()
          .toString()
          .padStart(2, "0")}`;

        const response = await fetch(
          `https://livescore-api.com/api-client/fixtures/matches.json?&key=rIrCPXdWAQfabJ2c&secret=aNxWEaoOilMjFCn7kOJ9MW6mNmwZ6ycg&competition_all&date=${formattedDate}`
        );

        if (response.ok) {
          const data = await response.json();

          setFixtures(data?.data?.fixtures || []);
        } else {
          console.error("Failed to fetch fixtures");
        }
      } catch (error) {
        console.error("Error fetching fixtures:", error);
      }
    };

    fetchData();
  }, [selectedDate]);

  return (
    <div>
      <ul className="space-y-4 mx-3">
        {fixtures.map((fixture) => (
          <li
            key={fixture.id}
            className=" font-sans flex justify-between p-3 border rounded-md border-black"
          >
            <div className="flex flex-col mt-2">
              <p className="text-lg font-bold">{fixture.home_name}</p>
              <p className="text-lg font-bold">{fixture.away_name}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p>Time: {fixture.time}</p>
              <p>Location: {fixture.location}</p>
              <p>Competition: {fixture.competition.name}</p>
            </div>

            <div className="flex flex-col items-end">
              <p className="font-bold">1: {fixture.odds?.pre?.["1"]}</p>
              <p className="font-bold">X: {fixture.odds?.pre?.["X"]}</p>
              <p className="font-bold">2: {fixture.odds?.pre?.["2"]}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fixtures;

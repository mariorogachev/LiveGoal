"use client";
import { useState, useEffect } from "react";

const Fixtures = ({ selectedDate }) => {
  const [fixtures, setFixtures] = useState([]);
  const [visibleFixtures, setVisibleFixtures] = useState(7); // Display only 7 initially

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
          console.log("Data received:", data);

          console.log("Fixtures data:", data?.data?.fixtures);

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

  const handleLoadMore = () => {
    setVisibleFixtures((prevVisibleFixtures) => prevVisibleFixtures + 7);
  };

  return (
    <div>
      <ul className="space-y-4 mx-3">
        {fixtures.slice(0, visibleFixtures).map((fixture) => (
          <li
            key={fixture.id}
            className="flex justify-between p-4 border rounded-md"
          >
            <div className="flex flex-col mt-2">
              <p className="text-lg font-bold">{fixture.home_name}</p>
              <p className="text-lg font-bold">{fixture.away_name}</p>
            </div>
            <div className="flex flex-col">
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

      {fixtures.length > visibleFixtures && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleLoadMore}
            className="bg-gray-900 text-white px-4 py-2 rounded-md"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Fixtures;

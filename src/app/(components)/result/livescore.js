import { useState, useEffect } from "react";

const LiveResults = () => {
  const [liveMatches, setLiveMatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://livescore-api.com/api-client/matches/live.json?key=rIrCPXdWAQfabJ2c&secret=aNxWEaoOilMjFCn7kOJ9MW6mNmwZ6ycg&competition_all"
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Data received:", data);
          setLiveMatches(data?.data?.match || []);
        } else {
          console.error("Failed to fetch live results");
        }
      } catch (error) {
        console.error("Error fetching live results:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {liveMatches.map((match) => (
          <li key={match.fixture_id}>
            <p>Match Time: {match.time}</p>
            <p>
              Competition: {match.competition?.name} - Tier{" "}
              {match.competition?.tier}
            </p>
            <p>
              {match.home?.name} {match.scores?.score} {match.away?.name}
            </p>
            <p>Location: {match.location}</p>
            <p className="mb-8">
              Odds: Home ({match.odds?.pre?.["1"]}), Away (
              {match.odds?.pre?.["2"]}), Draw ({match.odds?.pre?.["X"]})
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveResults;

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
          `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${formattedDate}&timezone=Europe%2FSofia`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "57ecac3d4emsh948fcf9454c587bp1e1337jsn6a8c4464d25c",
              "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
            },
          }
        );
 
        const data = await response.json();
        setFixtures(data.response);
      } catch (error) {
        console.error(error);
      }
    };
 
    fetchData();
  }, [selectedDate]);
 
  // Group fixtures by league
  const groupedFixtures = {};
  fixtures.forEach((fixture) => {
    const leagueAndCountry = `${fixture.league.country} - ${fixture.league.name}`;
    if (!groupedFixtures[leagueAndCountry]) {
      groupedFixtures[leagueAndCountry] = [];
    }
    groupedFixtures[leagueAndCountry].push(fixture);
  });
 
  // Sort the keys (country names) alphabetically
  const sortedCountries = Object.keys(groupedFixtures).sort();
 
  return (
    <div>
      {sortedCountries.map((country) => {
        const leagueAndCountryFixtures = groupedFixtures[country];
 
        return (
          <div key={country} className="mb-4">
            <h2 className="text-xl font-bold ml-3 mb-2">{country}</h2>
            <ul className="space-y-4 mx-3">
              {leagueAndCountryFixtures.map((fixture) => (
                <li
                  key={fixture.fixture.id}
                  className="font-sans flex justify-between p-3 border rounded-md border-black"
                >
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <img
                        className="w-10"
                        src={fixture.teams.home.logo}
                        alt={fixture.teams.home.name}
                      />
                      <p className="text-lg font-bold ml-2">
                        {fixture.teams.home.name}
                      </p>
                    </div>
 
                    <div className="flex items-center mt-2">
                      <img
                        className="w-10"
                        src={fixture.teams.away.logo}
                        alt={fixture.teams.away.name}
                      />
                      <p className="text-lg font-bold ml-2">
                        {fixture.teams.away.name}
                      </p>
                    </div>
                  </div>
 
                  <div className="flex flex-col items-center justify-center">
                    <p>
                      Time:{" "}
                      {new Date(fixture.fixture.date).toLocaleTimeString(
                        "en-US",
                        { timeStyle: "short" }
                      )}
                    </p>
                    <p>Location: {fixture.fixture.venue.name}</p>
                    
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="font-bold text-xl mt-2">
                      {fixture.goals.home}
                    </p>
                    <p className="font-bold text-xl mt-4">
                      {fixture.goals.away}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
 
export default Fixtures;

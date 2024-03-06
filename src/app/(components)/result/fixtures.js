import { useState, useEffect } from "react";

const Fixtures = ({ selectedDate }) => {
  const [fixtures, setFixtures] = useState([]);
  const [selectedGameId, setSelectedGameId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleGameClick = (gameId) => {
    console.log(`Game clicked: ${gameId}`);
    setSelectedGameId(gameId);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredFixtures = fixtures.filter((fixture) => {
    const normalizedQuery = searchQuery.toLowerCase();
    const countryAndCompetition =
      `${fixture.league.country} - ${fixture.league.name}`.toLowerCase();
    const teamsMatch =
      fixture.teams.home.name.toLowerCase().includes(normalizedQuery) ||
      fixture.teams.away.name.toLowerCase().includes(normalizedQuery);

    return teamsMatch || countryAndCompetition.includes(normalizedQuery);
  });

  const filteredLeagues = filteredFixtures.map(
    (fixture) => `${fixture.league.country} - ${fixture.league.name}`
  );

  const uniqueFilteredLeagues = [...new Set(filteredLeagues)];

  return (
    <div>
      <form className="mb-2 flex items-center justify-center">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search teams, countries, or competitions..."
          value={searchQuery}
          onChange={handleSearch}
          className="px-4 py-2 border border-gray-300 rounded-md items-center w-80"
        />
      </form>

      {uniqueFilteredLeagues.length === 0 && filteredFixtures.length === 0 && (
        <p className="font-bold text-4xl flex items-center justify-center">
          No Matches
        </p>
      )}

      {uniqueFilteredLeagues.map((league) => {
        const leagueFixtures = filteredFixtures.filter(
          (fixture) =>
            `${fixture.league.country} - ${fixture.league.name}` === league
        );

        return (
          <div key={league} className="mb-4">
            <h2 className="text-xl font-bold ml-3 mb-2">{league}</h2>
            <ul className="space-y-4 mx-3">
              {leagueFixtures.map((fixture) => (
                <li
                  key={fixture.fixture.id}
                  className="font-sans flex justify-between p-3 border rounded-md border-black"
                  onClick={() => handleGameClick(fixture.fixture.id)}
                >
                  <div className="flex items-center text-xl">
                    <p>
                      {fixture.fixture.status.short === "HT" && (
                        <p className="text-2xl text-red-600 font-bold">
                          {fixture.fixture.status.short}
                        </p>
                      )}

                      {fixture.fixture.status.short === "FT" && (
                        <p className="font-bold">
                          {fixture.fixture.status.short}
                        </p>
                      )}

                      {(fixture.fixture.status.short === "1H" ||
                        fixture.fixture.status.short === "2H") && (
                        <p className="text-2xl text-red-600 font-bold">
                          {fixture.fixture.status.elapsed}'
                        </p>
                      )}

                      {fixture.fixture.status.short !== "HT" &&
                        fixture.fixture.status.short !== "FT" &&
                        fixture.fixture.status.short !== "1H" &&
                        fixture.fixture.status.short !== "2H" && (
                          <p>
                            {new Date(fixture.fixture.date).toLocaleTimeString(
                              "en-US",
                              {
                                hour: "numeric",
                                minute: "numeric",
                                hour12: false,
                              }
                            )}
                          </p>
                        )}
                    </p>
                    <p>{fixture.fixture.status.type}</p>
                    {/* Display the teams */}
                    <div className="flex flex-col mx-3">
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
                  </div>

                  {/* Display the score on the right side */}
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

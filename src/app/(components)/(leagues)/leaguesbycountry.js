import { useState, useEffect } from "react";

const LeaguesByCountry = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [leagues, setLeagues] = useState([]);
  const [openDropdowns, setOpenDropdowns] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      const countriesUrl =
        "https://api-football-v1.p.rapidapi.com/v3/countries";
      const countriesOptions = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "57ecac3d4emsh948fcf9454c587bp1e1337jsn6a8c4464d25c",
          "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
        },
      };

      try {
        const countriesResponse = await fetch(countriesUrl, countriesOptions);
        const countriesResult = await countriesResponse.json();
        setCountries(countriesResult.response);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCountries();
  }, []);

  const handleCountryClick = async (countryName) => {
    const isDropdownOpen = openDropdowns.includes(countryName);
    setOpenDropdowns((prevOpenDropdowns) =>
      isDropdownOpen
        ? prevOpenDropdowns.filter((item) => item !== countryName)
        : [...prevOpenDropdowns, countryName]
    );

    if (!isDropdownOpen) {
      const leaguesUrl = `https://api-football-v1.p.rapidapi.com/v3/leagues?country=${encodeURIComponent(
        countryName
      )}`;
      const leaguesOptions = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "57ecac3d4emsh948fcf9454c587bp1e1337jsn6a8c4464d25c",
          "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
        },
      };

      try {
        const leaguesResponse = await fetch(leaguesUrl, leaguesOptions);
        const leaguesResult = await leaguesResponse.json();
        setLeagues(leaguesResult.response);
        setSelectedCountry(countryName);
      } catch (error) {
        console.error(error);
      }
    } else {
      setSelectedCountry(null);
      setLeagues([]);
    }
  };

  return (
    <div>
      <ul className="space-y-4">
        {countries.map((country, index) => (
          <li key={index}>
            <button
              onClick={() => handleCountryClick(country.name)}
              className=" flex items-center"
            >
              <img
                src={country.flag}
                alt={`${country.name} flag`}
                className="w-8 h-8 mx-2"
                loading="lazy"
              />
              <span>{country.name}</span>
            </button>
            {openDropdowns.includes(country.name) && (
              <div>
                <ul>
                  {leagues.map((league) => (
                    <button className="flex ml-3" key={league.league.id}>
                      {league.league.name}
                    </button>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeaguesByCountry;

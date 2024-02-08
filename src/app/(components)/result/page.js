'use client'
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    const fetchCompetitions = async () => {
      try {
        const response = await fetch(
          'https://api.football-data.org/v4/competitions/',
          {
            headers: {
              'X-Auth-Token': '1137f328e01749aab1913a4227163fa6', 
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch competitions');
        }

        const data = await response.json();
        setCompetitions(data.competitions);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchCompetitions();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">Football Competitions</h1>
        
        <ul>
          {competitions.map((competition) => (
            <li
              key={competition.id}
              className="bg-white border rounded p-4 mb-4"
            >
              <p className="text-lg font-bold">{competition.name}</p>
              <p className="text-sm">{competition.area.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;

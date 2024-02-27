import React from "react";
import Link from "next/link";

const Sport = () => {
  const sports = [
    "Football",
    "Basketball",
    "Motorsport",
    "Hockey",
    "NFL",
    "MotorSport",
    "Volleyball",
    "Baseball",
    "Handball",
    "Rugby",
  ];

  return (
    <div className="flex bg-gray-300 px-52">
      {sports.map((sport) => (
        <Link className="font-nunito font-bold uppercase h-10 flex-1 flex items-center justify-center text-center hover:bg-gray-700" key={sport} href={`/${sport.toLowerCase()}`}>
            {sport}
        </Link>
      ))}
    </div>
  );
};

export default Sport;



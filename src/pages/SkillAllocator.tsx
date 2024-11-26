import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const skills = ["Strength", "Dexterity", "Speech"];

const SkillAllocator: React.FC = () => {
  const { userName, skillPoints, setSkillPoints } = useUserContext();
  const [points, setPoints] = useState<number>(5);
  const navigate = useNavigate();

  const allocatePoint = (skill: string, change: number) => {
    if ((change > 0 && points > 0) || (change < 0 && skillPoints[skill] > 0)) {
      setSkillPoints((prev) => ({
        ...prev,
        [skill]: prev[skill] + change,
      }));
      setPoints((prev) => prev - change);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Hello, {userName}!</h2>
      <p>Allocate your skill points (Remaining: {points})</p>
      <div>
        {skills.map((skill) => (
          <div key={skill} style={{ margin: "10px" }}>
            <span>
              {skill}: {skillPoints[skill]}
            </span>
            <button
              onClick={() => allocatePoint(skill, -1)}
              disabled={skillPoints[skill] <= 0}
              style={{ marginLeft: "5px" }}
            >
              -
            </button>
            <button
              onClick={() => allocatePoint(skill, 1)}
              disabled={points <= 0}
              style={{ marginLeft: "10px" }}
            >
              +
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/common")}
        disabled={points > 0}
        style={{ marginTop: "20px" }}
      >
        Confirm
      </button>
    </div>
  );
};

export default SkillAllocator;

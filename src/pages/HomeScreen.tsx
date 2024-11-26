import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const HomeScreen: React.FC = () => {
  const { setUserName } = useUserContext();
  const [name, setName] = useState<string>("");
  const navigate = useNavigate();

  const handleNameSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name.trim() !== "") {
      setUserName(name);
      navigate("/skillallocator");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Life is Weird</h1>
      <form onSubmit={handleNameSubmit}>
        <label>
          Who are you?
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
        </label>
        <button type="submit" style={{ marginLeft: "10px" }}>
          Start
        </button>
      </form>
    </div>
  );
};

export default HomeScreen;

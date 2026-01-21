import { Route, Routes } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </div>
  );
};

export default Body;

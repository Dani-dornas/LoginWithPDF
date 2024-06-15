import { Route, Routes } from "react-router-dom";
import { Logout, MenuUser } from "../components";

export default function UserRoutes() {
  return (
    <>
      <MenuUser />
      <Routes>
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}

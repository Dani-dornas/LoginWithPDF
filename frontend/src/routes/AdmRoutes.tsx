import { Route, Routes } from "react-router-dom";
import { UserPage } from "../pages";
import { Logout, MenuAdm } from "../components";
import { UserProvider } from "../contexts";

export default function AdmRoutes() {
  return (
    <>
      <MenuAdm />
      <Routes>
        <Route
          path="/usuario"
          element={
            <UserProvider>
              <UserPage />
            </UserProvider>
          }
        />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts";
import AuthPage from "../pages/auth";
import Home from "../pages/home";

const AppRouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouterProvider;

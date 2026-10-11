import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Account from "./pages/Account";
import DailyTrades from "./pages/DailyTrades";
import Dashboard from "./pages/Dashboard";
import Journal from "./pages/Journal";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Stats from "./pages/Stats";
import Trades from "./pages/Trades";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="trades" element={<Trades />} />
            <Route path="daily-trades" element={<DailyTrades />} />
            <Route path="stats" element={<Stats />} />
            <Route path="journal" element={<Journal />} />
            <Route path="account" element={<Account />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

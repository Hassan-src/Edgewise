import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import Account from "./pages/Account";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Trades from "./pages/Trades";
import PageNotFound from "./pages/PageNotFound";
import EventsCalendar from "./pages/EconomicEvents";
import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";

import GlobalStyles from "./styles/GlobalStyles";
import Signup from "./pages/Signup";
import { AppProvider } from "./context/AppContext";
import VerifyEmail from "./pages/VerifyEmail";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="trades" element={<Trades />} />
              <Route path="events" element={<EventsCalendar />} />
              <Route path="account" element={<Account />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="verify-email" element={<VerifyEmail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "var(--space-2)" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "var(--text-xl)",
                fontWeight: "500",
                backgroundColor: "var(--color-bg)",
                color: "var(--color-text)",
                padding: "var(--space-4)",
              },
            }}
          />
        </BrowserRouter>
      </QueryClientProvider>
    </AppProvider>
  );
}

export default App;

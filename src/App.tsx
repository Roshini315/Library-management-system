import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./auth/AuthContext";
import Navbar from "./components/NavBar";
import Login from "./auth/Login";
import AdminLogin from "./auth/Adminlogin";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Borrowed from "./pages/Borrowed";
import AdminDashboard from "./pages/AdminDashboard";

function Layout() {
  const { user } = useAuth();

  return (
    <>
      {user && <Navbar />}    {/* Navbar ONLY here */}

      <Routes>
        {!user && (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/admin-login" element={<AdminLogin />} />
          </>
        )}

        {user && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/borrowed" element={<Borrowed />} />
            {user.role === "admin" && (
              <Route path="/admin" element={<AdminDashboard />} />
            )}
          </>
        )}
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </AuthProvider>
  );
}

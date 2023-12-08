import { Route, Routes } from "react-router-dom";
import "./globals.css";
import SignInForm from "./_auth/forms/SignInForm";
import { Home } from "./_root/pages";
import SignUpForm from "./_auth/forms/SignUpForm";
import AuthLayout from "./_auth/forms/AuthLayout";
import RootLayout from "./_root/pages/RootLayout";
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public root */}

        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>

        {/* privete routes */}
        <Route element={<RootLayout />}>
          <Route path="/" index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm.jsx";
import GoogleLoginButton from "../components/GoogleLoginButton.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { apiPost } from "../lib/api";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleSuccess = async (idToken) => {
    setError("");
    try {
      if (!idToken) {
        setError("Google sign-in failed.");
        return;
      }

      const data = await apiPost("/auth/google", { idToken });
      login(data.user, data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Google login failed.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    setLoading(true);
    try {
      const data = await apiPost("/auth/login", { email, password });
      login(data.user, data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthForm
      title="Welcome back"
      fields={[
        {
          name: "email",
          label: "Email",
          type: "email",
          value: email,
          onChange: (e) => setEmail(e.target.value),
          placeholder: "you@bitmesra.ac.in",
          required: true,
          autoComplete: "email",
        },
        {
          name: "password",
          label: "Password",
          type: "password",
          value: password,
          onChange: (e) => setPassword(e.target.value),
          placeholder: "••••••••",
          required: true,
          autoComplete: "current-password",
        },
      ]}
      submitText={loading ? "Signing in..." : "Sign in"}
      isSubmitting={loading}
      onSubmit={handleSubmit}
    >
      {error && <p className="text-red-400 text-sm">{error}</p>}
      <p className="text-center text-xs text-[var(--muted)]">Or sign in with Google</p>
      <GoogleLoginButton onSuccess={handleGoogleSuccess} />
      <p className="text-center text-sm text-[var(--muted)]">
        Don&apos;t have an account?{" "}
        <Link className="text-[var(--glow)] hover:underline" to="/register">
          Sign up
        </Link>
      </p>
    </AuthForm>
  );
};

export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm.jsx";
import GoogleLoginButton from "../components/GoogleLoginButton.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { apiPost } from "../lib/api";

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!name || !email || !password) {
      setError("Name, email, and password are required.");
      return;
    }

    setLoading(true);
    try {
      const data = await apiPost("/auth/register", { name, email, password });
      login(data.user, data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

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

  return (
    <AuthForm
      title="Create an account"
      fields={[
        {
          name: "name",
          label: "Name",
          type: "text",
          value: name,
          onChange: (e) => setName(e.target.value),
          placeholder: "Full name",
          required: true,
          autoComplete: "name",
        },
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
          autoComplete: "new-password",
        },
      ]}
      submitText={loading ? "Creating account..." : "Sign up"}
      isSubmitting={loading}
      onSubmit={handleSubmit}
    >
      {error && <p className="text-red-400 text-sm">{error}</p>}
      <p className="text-center text-xs text-[var(--muted)]">Or continue with Google</p>
      <GoogleLoginButton onSuccess={handleGoogleSuccess} />
      <p className="text-center text-sm text-[var(--muted)]">
        Already have an account?{" "}
        <Link className="text-[var(--glow)] hover:underline" to="/login">
          Sign in
        </Link>
      </p>
    </AuthForm>
  );
};

export default Register;

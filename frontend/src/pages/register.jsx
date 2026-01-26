import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm.jsx";
import GoogleLoginButton from "../components/GoogleLoginButton.jsx";
import { useAuth } from "../context/AuthContext.jsx";

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
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errPayload = await response.json().catch(() => ({}));
        throw new Error(errPayload.message || "Registration failed");
      }

      const data = await response.json();
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

      const apiUrl = import.meta.env.VITE_API_URL;
      const result = await fetch(`${apiUrl}/api/auth/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });

      if (!result.ok) {
        const errPayload = await result.json().catch(() => ({}));
        throw new Error(errPayload.message || "Google login failed.");
      }

      const data = await result.json();
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

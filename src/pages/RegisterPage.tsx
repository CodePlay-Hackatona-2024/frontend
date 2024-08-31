import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RiLockPasswordLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineIdcard } from "react-icons/ai";

export default function RegistrationPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, cpf, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful registration (e.g., redirect, show success message)
        console.log("Registration successful", data);
      } else {
        // Handle errors (e.g., email already taken)
        setError(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
      <Button
        className="absolute top-4 right-4 px-3 py-1.5 text-gray-600 bg-gray-300 text-sm hover:bg-gray-400"
        onClick={() => window.location.href = "/login"} // Redirect to login page
      >
        Sign in
      </Button>
      <div className="text-center">
        <div className="mb-8">
          <div className="flex justify-center">
            <img src="/logo.png" alt="Logo" className="w-24 h-24" />
          </div>
          <h1 className="text-2xl font-semibold mt-6">Bem-vindo ao ‘...’</h1>
          <p className="text-gray-500 text-lg">Crie sua conta...</p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <FaRegUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-14 text-lg py-2"
            />
          </div>
          <div className="relative">
            <CiMail className="absolute left-4 top-1/2 transform -translate-y-1/2" />
            <Input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-14 text-lg py-2"
            />
          </div>
          <div className="relative">
            <AiOutlineIdcard className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
            <Input
              type="text"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              className="w-full pl-14 text-lg py-2"
            />
          </div>
          <div className="relative">
            <RiLockPasswordLine className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-14 text-lg py-2"
            />
          </div>
        </div>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        <div className="mt-8">
          <Button
            className="w-full bg-primary text-white hover:bg-primary/90 text-lg"
            onClick={handleRegister}
            disabled={loading}
          >
            {loading ? "Loading..." : "Registrar"}
          </Button>
        </div>
      </div>
    </div>
  );
}

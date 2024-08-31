import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RiLockPasswordLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineIdcard } from "react-icons/ai";
import backgroundImage from '../assets/background2.jpg';

export default function RegistrationPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setPasswordError("As senhas não coincidem");
      return;
    }

    setLoading(true);
    setError("");
    setPasswordError("");

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
        console.log("Registration successful", data);
      } else {
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
    <div
      className="relative flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center bg-white p-6 rounded-lg shadow-lg w-full max-w-xs">
        <div className="mb-6">
          <div className="flex justify-center">
            <img src="/logo.png" alt="Logo" className="w-20 h-20" />
          </div>
          <h1 className="text-xl font-semibold mt-4">Bem-vindo ao ‘...’</h1>
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
          <div className="relative">
            <RiLockPasswordLine className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
            <Input
              type="password"
              placeholder="Confirme a Senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full pl-14 text-lg py-2"
            />
          </div>
          {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
        </div>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        <div className="mt-6">
          <Button
            className="w-full bg-primary text-white hover:bg-primary/90 text-lg"
            onClick={handleRegister}
            disabled={loading}
          >
            {loading ? "Loading..." : "Registrar"}
          </Button>
        </div>

        <div className="mt-4">
          <p className="text-gray-500 text-sm">
            Já tem uma conta?{" "}
            <Button
              variant="link"
              className="text-primary hover:underline ml-1"
              onClick={() => window.location.href = "/login"}
            >
              Faça login
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}

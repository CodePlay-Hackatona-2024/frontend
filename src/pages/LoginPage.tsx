import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RiLockPasswordLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { ClipLoader } from "react-spinners";
import { api } from "@/lib/api/axios";
import backgroundImage from "../assets/background2.jpg";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await api.post<{ user: { id: string } }>(
        "user/login",
        JSON.stringify({ email, password })
      );

      if (response.status == 201) {
        console.log("Login successful", response.data);
        localStorage.setItem("id", response.data.user.id);
        login();
        navigate("/events");
      } else {
        setError("Falha no login. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro durante o login:", error);
      setError("Ocorreu um erro. Tente novamente.");
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
      <div className="text-center bg-white p-8 rounded-lg shadow-lg w-full max-w-xs">
        <div className="mb-8">
          <h1 className="text-primary font-inter text-3xl font-bold">
            Help Chain
          </h1>
          <div className="flex justify-center mt-4">
            <img src={logo} alt="Logo" className="w-24 h-24 object-cover" />
          </div>
        </div>

        <div className="space-y-4">
          {" "}
          {/* Reduzi o espaço aqui de space-y-6 para space-y-4 */}
          <div className="relative">
            <CiMail className="absolute left-4 top-1/2 transform -translate-y-1/2" />
            <Input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-16 text-lg py-2"
            />
          </div>
          <div className="relative">
            <RiLockPasswordLine className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-16 text-lg py-2"
            />
          </div>
        </div>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        <div className="mt-8 space-y-4">
          <Button
            className="w-full text-gray-600 bg-gray-300 text-lg hover:bg-gray-400 flex items-center justify-center"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? <ClipLoader size={24} color="#fff" /> : "Entrar"}
          </Button>
          <Button variant="link" className="text-gray-600 text-lg">
            Esqueceu sua senha?
          </Button>
        </div>
      </div>
    </div>
  );
}

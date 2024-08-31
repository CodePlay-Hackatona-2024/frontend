import { useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RiLockPasswordLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { ClipLoader } from "react-spinners";
import backgroundImage from "../assets/background2.jpg";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `/api/auth/login?email=${encodeURIComponent(
          email
        )}&password=${encodeURIComponent(password)}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful", data);
        localStorage.setItem("id", data.id);
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
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
      <div className="text-center bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-8">
          <div className="flex justify-center">
            <img src="/logo.png" alt="Logo" className="w-24 h-24" />
          </div>
          <h1 className="text-2xl font-semibold mt-6">Bem-vindo ao ‘...’</h1>
          <p className="text-gray-500 text-lg">frase</p>
        </div>

        <div className="space-y-6">
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

import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import backgroundImage from '../assets/background2.jpg';

export default function FirstPage() {
  const navigate = useNavigate();

  const goToRegisterPage = () => {
    navigate("/register");
  };

  const goToLoginPage = () => {
    navigate("/login");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
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
            <img src="/logo.png" alt="Logo" className="w-16 h-16" />
          </div>
          <h1 className="text-xl font-semibold mt-4">Bem-vindo...</h1>
          <p className="text-gray-500">frase</p>
        </div>

        <div className="mt-6 space-y-2">
          <Button
            className="w-full bg-primary text-white hover:bg-primary/90 py-2"
            onClick={goToRegisterPage}
          >
            Cadastrar
          </Button>
          <Button
            className="w-full bg-gray-300 text-gray-600 hover:bg-gray-400 py-2"
            onClick={goToLoginPage}
          >
            Entrar
          </Button>
        </div>
      </div>
    </div>
  );
}

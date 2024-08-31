import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const goToRegisterPage = () => {
    navigate("/register");
  };

  const goToLoginPage = () => {
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="mb-6">
          {/* Logo */}
          <div className="flex justify-center">
            <svg
              className="w-16 h-16 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8zm8 2a8 8 0 11-16 0 8 8 0 0116 0z"
              />
            </svg>
          </div>
          <h1 className="text-xl font-semibold mt-4">Bem-vindo...</h1>
          <p className="text-gray-500">frase</p>
        </div>

        <div className="mt-6 space-y-2">
          <Button className="w-full bg-primary text-white hover:bg-primary/90" onClick={goToRegisterPage}>
            Cadastrar
          </Button>
          <Button className="w-full bg-gray-300 text-gray-600 hover:bg-gray-400" onClick={goToLoginPage}>
            Entrar
          </Button>
        </div>
      </div>
    </div>
  );
}

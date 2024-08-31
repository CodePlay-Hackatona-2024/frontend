import { Input } from "@/components/ui/input";

export default function RegistrationPage() {

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
      <button className="absolute top-4 right-4 px-3 py-1.5 text-gray-600 bg-gray-300 rounded-md text-sm">
        Sign in
      </button>
      <div className="text-center">
        <div className="mb-8">
          {/*logo*/}
          <div className="flex justify-center">
            <svg className="w-24 h-24 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8zm8 2a8 8 0 11-16 0 8 8 0 0116 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold mt-6">Bem-vindo ao ‘...’</h1>
          <p className="text-gray-500 text-lg">Crie sua conta...</p>
        </div>

        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full text-lg px-4 py-2"
          />
          <Input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            className="w-full text-lg px-4 py-2"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-lg px-4 py-2"
          />
        </div>

        <div className="mt-8">
          <button
            onClick={handleRegister}
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md text-lg"
          >
            Registrar
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";

// Simulating a fetch from a database
const fetchUsers = async () => {
  return [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
  ];
};

export default function LoginPage() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch users from the "database"
    const getUsers = async () => {
      const usersFromDB = await fetchUsers();
      setUsers(usersFromDB);
    };

    getUsers();
  }, []);

  const handleLogin = () => {
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      // Redirect to dashboard or do something on successful login
      console.log('Login successful');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
      <button className="absolute top-4 right-4 px-3 py-1.5 text-white bg-blue-600 rounded-md text-sm">
        Registration
      </button>
      <div className="text-center">
        <div className="mb-8">
          {/* Replace this with your actual logo */}
          <div className="flex justify-center">
            <svg className="w-24 h-24 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8zm8 2a8 8 0 11-16 0 8 8 0 0116 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold mt-6">Bem-vindo ao ‘...’</h1>
          <p className="text-gray-500 text-lg">frase</p>
        </div>

        <div className="space-y-6">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

        {error && <p className="text-red-500 text-lg mt-4">{error}</p>}

        <div className="mt-8 space-y-4">
          <button
            onClick={handleLogin}
            className="w-full px-4 py-2 text-gray-600 bg-gray-300 rounded-md text-lg"
          >
            Sign in
          </button>
          <p className="text-gray-600 text-lg">Forgot password?</p>
        </div>
      </div>
    </div>
  );
}

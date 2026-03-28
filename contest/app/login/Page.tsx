"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Mock Authentication Logic
    if (email === "admin@example.com" && password === "password123") {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/");
    } else {
      alert("Invalid credentials! Try admin@example.com / password123");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-slate-100 text-slate-900">
      <form 
        onSubmit={handleLogin} 
        className="p-8 bg-white shadow-2xl rounded-2xl w-full max-w-md border border-slate-200"
      >
        <h1 className="text-3xl font-bold mb-2 text-center">Welcome Back</h1>
        <p className="text-slate-500 mb-8 text-center text-sm">Please enter your details</p>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input 
              type="email" 
              placeholder="name@company.com" 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white p-3 rounded-lg mt-8 font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
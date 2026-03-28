"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();

  // Your specific contest link
  const CONTEST_URL = "https://www.hackerrank.com/contest-1-1774623729";

  useEffect(() => {
    // Check if user is logged in
    const auth = localStorage.getItem("isLoggedIn");
    
    if (!auth) {
      // If no session found, send them to login
      router.push("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
  };

  // Prevent UI flicker before auth check
  if (!isAuthenticated) return null;

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-slate-900 font-sans">
      <div className="max-w-2xl w-full bg-white p-10 rounded-3xl shadow-xl border border-slate-100 text-center space-y-8">
        
        <div className="space-y-2">
          <h1 className="text-4xl font-black tracking-tight text-blue-600">
            Authentication Successful
          </h1>
          <p className="text-slate-500 text-lg">
            You are now authorized to participate in the contest.
          </p>
        </div>

        <div className="py-4">
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-8">
            <h2 className="font-bold text-blue-800 mb-2 text-xl">Active Contest:</h2>
            <p className="text-blue-600 font-mono text-sm break-all">
              {CONTEST_URL}
            </p>
          </div>

          <a 
            href={CONTEST_URL}
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-200 bg-blue-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-blue-700 shadow-lg shadow-blue-200"
          >
            Start Contest Now
            <svg 
              className="w-5 h-5 ml-3 transition-transform duration-200 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        <div className="pt-6 border-t border-slate-100">
          <button 
            onClick={handleLogout}
            className="text-slate-400 hover:text-red-500 text-sm font-medium transition-colors"
          >
            End Session & Logout
          </button>
        </div>
      </div>
      
      <p className="mt-8 text-slate-400 text-xs uppercase tracking-widest">
        Secure Contest Portal v1.0
      </p>
    </main>
  );
}
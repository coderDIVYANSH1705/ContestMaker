"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("isLoggedIn");
    if (!auth) {
      router.push("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
  };

  // Prevent rendering the UI if not authenticated
  if (!isAuthenticated) return null;

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-slate-900">
      <div className="max-w-xl w-full text-center space-y-6">
        <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
          Access Granted
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Your Next Challenge Awaits.
        </h1>
        
        <p className="text-lg text-slate-600 max-w-md mx-auto">
          You have successfully authenticated. Click the button below to head over to the HackerRank contest portal.
        </p>
        
        <div className="pt-6">
          <a 
            href="https://www.hackerrank.com/contests" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-emerald-500 text-white rounded-xl font-bold text-lg hover:bg-emerald-600 transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2 shadow-xl shadow-emerald-100"
          >
            Go to HackerRank Contest
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        <button 
          onClick={handleLogout}
          className="mt-12 text-slate-400 hover:text-red-500 font-medium transition-colors underline underline-offset-4 decoration-slate-200"
        >
          Sign out of session
        </button>
      </div>
    </main>
  );
}
import React, { createContext, useContext, useEffect, useState } from "react";

interface Additive {
  id: string;
  name: string;
  eNumber: string;
  isHalal: boolean;
  type: string;
  source: string;
}

interface AdditiveContextType {
  additives: Additive[];
  loading: boolean;
  error: string | null;
}

const AdditiveContext = createContext<AdditiveContextType | undefined>(undefined);

export const AdditiveProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [additives, setAdditives] = useState<Additive[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAdditives = async () => {
      try {
        const response = await fetch("https://eatsmarty.vercel.app/api/additives");
        if (!response.ok) {
          throw new Error("Failed to fetch additives");
        }
        const data = await response.json();
        setAdditives(data.result.additivesList || []);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchAdditives();
  }, []);

  return (
    <AdditiveContext.Provider value={{ additives, loading, error }}>
      {children}
    </AdditiveContext.Provider>
  );
};

export const useAdditives = (): AdditiveContextType => {
  const context = useContext(AdditiveContext);
  if (!context) {
    throw new Error("useAdditives must be used within an AdditiveProvider");
  }
  return context;
};

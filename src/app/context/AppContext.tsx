
"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';

// --- Type Definitions ---
export type Currency = 'IDR' | 'USD' | 'SGD' | 'MYR';
export type Language = 'id' | 'en';

interface AppContextState {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  language: Language;
  setLanguage: (language: Language) => void;
  getFormattedPrice: (priceInIdr: number) => string;
}

// --- Exchange Rates (for demonstration) ---
const exchangeRates: Record<Currency, number> = {
  IDR: 1,
  USD: 1 / 16200,
  SGD: 1 / 12000,
  MYR: 1 / 3400,
};

const currencySymbols: Record<Currency, string> = {
    IDR: 'Rp',
    USD: '$',
    SGD: 'S$',
    MYR: 'RM',
}

// --- Context Creation ---
const AppContext = createContext<AppContextState | undefined>(undefined);

// --- Provider Component ---
export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>('IDR');
  const [language, setLanguage] = useState<Language>('id');

  const getFormattedPrice = (priceInIdr: number): string => {
    const rate = exchangeRates[currency];
    const convertedPrice = priceInIdr * rate;
    
    // Use Intl.NumberFormat for proper formatting
    const formatter = new Intl.NumberFormat('id-ID', {
        // style: 'currency' is tricky without changing locale, so we handle symbol manually
        // currency: currency, 
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    
    return `${currencySymbols[currency]} ${formatter.format(convertedPrice)}`;
  };


  const value = {
    currency,
    setCurrency,
    language,
    setLanguage,
    getFormattedPrice,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// --- Custom Hook ---
export const useAppContext = (): AppContextState => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};

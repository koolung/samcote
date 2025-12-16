'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'fr'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    home: 'Home',
    services: 'Services',
    about: 'Meet Sam Côté',
    initiative: 'Fingerprint Initiative',
    contact: 'Contact',
    selectLanguage: 'Please select language',
    welcome: 'Welcome to Samcote',
    french: 'Français',
    english: 'English',
  },
  fr: {
    home: 'Accueil',
    services: 'Services',
    about: 'Qui est Sam Côté?',
    initiative: "L'initiative empreinte numérique",
    contact: 'Contact',
    selectLanguage: 'Veuillez sélectionner la langue',
    welcome: 'Bienvenue chez Samcote',
    french: 'Français',
    english: 'English',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

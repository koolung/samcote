'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="flex gap-3">
      <button
        onClick={() => setLanguage('en')}
        className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
          language === 'en'
            ? 'bg-black text-white'
            : 'bg-gray-200 text-black hover:bg-gray-300'
        }`}
      >
        {t('english')}
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
          language === 'fr'
            ? 'bg-black text-white'
            : 'bg-gray-200 text-black hover:bg-gray-300'
        }`}
      >
        {t('french')}
      </button>
    </div>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem('cookie_consent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-fade-up">
      <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-2xl border border-slate-700">
        <div className="flex items-start gap-3 mb-4">
          <span className="text-2xl flex-shrink-0">🍪</span>
          <div>
            <p className="font-semibold text-sm mb-1">Usamos cookies</p>
            <p className="text-slate-400 text-xs leading-relaxed">
              Utilizamos cookies analíticas para mejorar su experiencia. Consulte nuestra{' '}
              <Link href="/politica-cookies" className="text-accent-400 hover:underline">
                política de cookies
              </Link>.
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={accept}
            className="flex-1 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Aceptar
          </button>
          <button
            onClick={reject}
            className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium py-2 px-4 rounded-lg transition-colors border border-slate-600"
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  )
}

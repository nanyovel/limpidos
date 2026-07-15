"use client"; // Asegúrate de tener esto si usas el App Router de Next.js

import { useState } from "react";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // REEMPLAZA ESTA URL POR LA QUE TE DIO GOOGLE APPS SCRIPT
    // const GOOGLE_SCRIPT_URL = "TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUI";
    const GOOGLE_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbxR1gGHaAjFsaBBRr4V1ADR8iO-wEAxUwLlozPphMspGomooPKxj6kVi92NrJL46HfV3g/exec";

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Importante para evitar problemas de CORS con Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      // Nota: Con 'no-cors', la respuesta siempre viene opaca (status 0),
      // por lo que asumimos que si no se lanzó al catch, se envió correctamente.
      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Error al suscribirse:", error);
      setStatus("error");
    }
  };

  return (
    <div className="mt-20 bg-brand-50 border border-brand-100 rounded-3xl p-8 md:p-12 text-center">
      {/* Lead magnet CTA */}
      <h3 className="text-2xl font-display font-bold text-brand-900 mb-3">
        ¿Quiere recibir más contenido como este?
      </h3>
      <p className="text-slate-500 mb-6 max-w-xl mx-auto">
        Suscríbase y reciba guías exclusivas sobre gestión operativa,
        outsourcing y optimización de costos directamente en su email
        corporativo.
      </p>

      <form
        onSubmit={handleSubscribe}
        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="su@empresa.com"
          className="input-field flex-1 px-4 py-2 border rounded-xl" // Ajusta clases según tu diseño
          disabled={status === "loading" || status === "success"}
        />
        <button
          type="submit"
          className="btn-primary whitespace-nowrap disabled:opacity-50"
          disabled={status === "loading" || status === "success"}
        >
          {status === "loading"
            ? "Enviando..."
            : status === "success"
              ? "¡Suscrito!"
              : "Suscribirme"}
        </button>
      </form>

      {/* Mensajes de Feedback para el usuario */}
      {status === "success" && (
        <p className="text-sm text-green-600 mt-3 font-medium">
          ¡Gracias! Te has registrado correctamente.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600 mt-3 font-medium">
          Hubo un error. Por favor, inténtalo de nuevo.
        </p>
      )}

      <p className="text-xs text-slate-400 mt-3">
        Sin spam. Puede cancelar en cualquier momento.
      </p>
    </div>
  );
}

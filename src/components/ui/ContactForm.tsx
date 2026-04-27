"use client";

import { useState } from "react";

const SERVICE_OPTIONS = [
  "Limpieza de Oficinas",
  "Limpieza Industrial",
  "Limpieza Post-Construcción",
  "Mantenimiento General",
  "Múltiples Servicios / No estoy seguro",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formInitialState = {
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    tipoServicio: "",
    mensaje: "",
  };
  const [form, setForm] = useState({
    ...formInitialState,
  });
  const [acepta, setAcepta] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    console.log({ ...form, [e.target.name]: e.target.value });
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit2 = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!acepta) return;
    const { nombre, empresa, email, telefono, tipoServicio, mensaje } = form;
    console.log(form);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          empresa,
          email,
          telefono,
          tipoServicio,
          mensaje,
        }),
      });

      const data = await res.json();

      console.log("STATUS:", res.status);
      console.log("DATA:", data);

      // ✅ SI FALLA → enviar a WhatsApp
      if (!res.ok || data.error) {
        const msg = encodeURIComponent(
          `Nuevo lead:\nNombre: ${nombre}\nTeléfono: ${telefono}\nEmail: ${email}\nMensaje: ${mensaje}`
        );

        window.open(`https://wa.me/18493419890?text=${msg}`, "_blank");
        setStatus("error");
        return;
      }

      // ✅ SI TODO SALE BIEN
      setStatus("success");

      setForm({
        ...formInitialState,
      });
      setLoading(false);
      setSubmitted(true);
    } catch (error) {
      // 🚨 Error de red (muy importante cubrir esto)
      console.error("Error de red:", error);

      const msg = encodeURIComponent(
        `Nuevo lead:\nNombre: ${nombre}\nTeléfono: ${telefono}\nEmail: ${email}\nPresupuesto: \nMensaje: ${mensaje}`
      );

      window.open(`https://wa.me/18493419890?text=${msg}`, "_blank");
      setStatus("error");
    }
  };
  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-display font-bold text-brand-900 mb-2">
          ¡Solicitud recibida!
        </h3>
        <p className="text-slate-500 mb-6">
          Un asesor de Limpidos se pondrá en contacto con usted en menos de 24
          horas con una propuesta personalizada.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-brand-600 font-medium hover:underline text-sm"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Nombre completo <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="nombre"
            required
            placeholder="Juan Pérez"
            className="input-field"
            value={form.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Empresa <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="empresa"
            required
            placeholder="Nombre de su empresa"
            className="input-field"
            value={form.empresa}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Email corporativo <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="juan@empresa.com"
            className="input-field"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Teléfono <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="telefono"
            required
            placeholder="+1 (809) 000-0000"
            className="input-field"
            value={form.telefono}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Tipo de servicio de interés <span className="text-red-500">*</span>
        </label>
        <select
          name="tipoServicio"
          required
          className="input-field"
          value={form.tipoServicio}
          onChange={handleChange}
        >
          <option value="">Seleccione un servicio...</option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Mensaje adicional
        </label>
        <textarea
          name="mensaje"
          rows={4}
          placeholder="Cuéntenos más sobre sus necesidades, horarios, o cualquier detalle relevante..."
          className="input-field resize-none"
          value={form.mensaje}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacy"
          checked={acepta}
          onChange={(e) => setAcepta(e.target.checked)}
          name="privacy"
          required
          className="mt-1 w-4 h-4 text-brand-600 border-slate-300 rounded focus:ring-brand-500"
        />
        <label htmlFor="privacy" className="text-sm text-slate-500">
          Acepto la{" "}
          <a
            href="/politica-privacidad"
            className="text-brand-600 hover:underline"
          >
            Política de Privacidad
          </a>{" "}
          y el tratamiento de mis datos para gestionar mi solicitud.
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center text-base py-4 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <svg
              className="w-5 h-5 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Enviando solicitud...
          </>
        ) : (
          <>
            Solicitar Cotización Gratuita
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </>
        )}
      </button>

      <p className="text-xs text-slate-400 text-center">
        Sin compromiso. Un asesor le contactará en menos de 24 horas.
      </p>
    </form>
  );
}

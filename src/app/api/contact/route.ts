import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const correoGmail = "jperezjimenez06@gmail.com";
  const correoLimpidos = "jperez@limpidos.com";
  try {
    console.log(req);
    const body = await req.json();

    const { nombre, empresa, email, telefono, tipoServicio, mensaje } = body;
    console.log(body);
    if (!nombre || !email || !mensaje || !telefono) {
      return Response.json({ error: "Faltan campos" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Limpidos web - <ventas@limpidos.com>",
      to: [correoGmail, correoLimpidos],
      replyTo: email,
      subject: "Limpidos - Nuevo lead",
      html: `
      <h2>Nuevo cliente interesado</h2>

      <p>Hola José,</p>

      <p>Has recibido un nuevo contacto desde tu página web:</p>

      <ul>
        <li><strong>Nombre:</strong> ${nombre}</li>
        <li><strong>Empresa:</strong> ${empresa}</li>
        <li><strong>Teléfono:</strong> ${telefono}</li>
        <li><strong>Tipo de servicio:</strong> ${tipoServicio}</li>
        <li><strong>Email:</strong> ${email}</li>
      </ul>

      <p><strong>Mensaje:</strong></p>
      <p>${mensaje}</p>

      <hr>

      <p>Este mensaje fue enviado desde cocinasmodernasrd.com</p>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Error enviando email" }, { status: 500 });
  }
}

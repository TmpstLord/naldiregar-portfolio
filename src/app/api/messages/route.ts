import { NextResponse } from "next/server";
import { contactMessageSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactMessageSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validasi input gagal",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { name, email, subject, message } = parsed.data;
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (webhookUrl) {
      const discordResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "MasterOfTempest Portfolio",
          embeds: [
            {
              title: `📩 Pesan Baru: ${subject}`,
              color: 0x06b6d4, // Cyan accent
              fields: [
                { name: "Pengirim", value: name, inline: true },
                { name: "Email", value: email, inline: true },
                { name: "Isi Pesan", value: message },
              ],
              timestamp: new Date().toISOString(),
            },
          ],
        }),
      });

      if (!discordResponse.ok) {
        throw new Error("Gagal mengirim notifikasi ke Discord");
      }
    } else {
      console.log("[PORTFOLIO MESSAGE]", { name, email, subject, message });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Pesan berhasil dikirim! Terima kasih telah menghubungi.",
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan saat memproses permintaan.",
      },
      { status: 500 },
    );
  }
}

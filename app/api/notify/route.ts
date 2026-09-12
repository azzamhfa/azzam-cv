import { NextResponse } from "next/server";

const RESEND_API_URL = "https://api.resend.com/emails";
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000;
const recentRequests = new Map<string, number>();

export const runtime = "nodejs";

function getClientKey(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.NOTIFICATION_TO_EMAIL;
  const sender = process.env.NOTIFICATION_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    return NextResponse.json(
      { error: "Notification service is not configured." },
      { status: 503 },
    );
  }

  const clientKey = getClientKey(request);
  const lastRequest = recentRequests.get(clientKey);
  if (lastRequest && Date.now() - lastRequest < RATE_LIMIT_WINDOW_MS) {
    return NextResponse.json(
      { error: "Notification already sent recently." },
      { status: 429 },
    );
  }

  let body: { event?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  if (body.event !== "secret_pages_opened") {
    return NextResponse.json({ error: "Invalid event." }, { status: 400 });
  }

  recentRequests.set(clientKey, Date.now());

  try {
    const response = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        subject: "Someone opened the restricted portfolio files",
        text: "A visitor opened the restricted files on your portfolio.",
      }),
    });

    if (!response.ok) {
      recentRequests.delete(clientKey);
      return NextResponse.json(
        { error: "Email provider rejected the notification." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    recentRequests.delete(clientKey);
    return NextResponse.json(
      { error: "Email provider is unavailable." },
      { status: 502 },
    );
  }
}
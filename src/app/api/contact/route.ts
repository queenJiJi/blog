import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message } = body;

  const webhookUrl = process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json({ error: "Webhook URL missing" }, { status: 500 });
  }

  const payload = {
    text: `📬 새 문의 도착!\n\n*이름*: ${name}\n*이메일*: ${email}\n*내용*:\n${message}`,
  };

  try {
    const slackRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!slackRes.ok) {
      return NextResponse.json({ error: "Slack 전송 실패" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "서버 에러" }, { status: 500 });
  }
}

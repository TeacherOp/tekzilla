"use server";

type ActionState = { success: boolean; message?: string } | null;

export async function sendContactEmail(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string"
    ) {
      return { success: false, message: "Missing fields" };
    }

    const emailSubject = `Contact Form Submission: ${subject}`;

    const emailBody = {
      name,
      email,
      subject,
      message,
    };

    const { Resend } = await import("resend");
    const { EmailTemplate } = await import("@/components/email-template");

    const resend = new Resend(process.env.RESEND_API_KEY!);

    const fromEmail = process.env.EMAIL_FROM;
    const toEmailsEnv = process.env.EMAIL_TO;

    if (!fromEmail) {
      throw new Error("Missing EMAIL_FROM environment variable");
    }
    if (!toEmailsEnv) {
      throw new Error("Missing EMAIL_TO environment variable");
    }

    // Support comma separated emails in EMAIL_TO
    const toEmails = toEmailsEnv
      .split(",")
      .map((e) => e.trim())
      .filter((e) => e.length > 0);

    await resend.emails.send({
      from: fromEmail,
      to: toEmails,
      subject: emailSubject,
      react: EmailTemplate(emailBody),
      replyTo: email,
    });

    return { success: true, message: "Your message has been sent." };
  } catch (err: any) {
    return {
      success: false,
      message: err?.message || "Failed to send message.",
    };
  }
}

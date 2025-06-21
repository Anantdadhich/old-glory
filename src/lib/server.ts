import nodemailer from "nodemailer";

export const sendEmail = async (data: Record<string, any>) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.EMAIL_PASS,
    },
  });

  const { name, email, subject, message } = data;

  await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: "comacksclient@gmail.com", 
    subject: `📩 New Inquiry: ${subject || "No Subject"} - Old Glory Dental Clinic`,
    text: `
You have received a new message from the contact form on the Old Glory Dental Clinic website.

Name: ${name}
Email: ${email}
Subject: ${subject || "Not Provided"}

Message:
${message}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #2c3e50;">📬 New Request - Old Glory Dental Clinic</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "Not Provided"}</p>
        <hr style="margin: 20px 0;" />
        <p style="white-space: pre-line;"><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
        <hr />
        <p style="font-size: 0.9rem; color: #777;">
          This message was sent via the Old Glory Dental Clinic Contact form.
        </p>
      </div>
    `,
  });
};

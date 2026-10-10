import emailjs from "@emailjs/browser";

export interface EnquiryEmailData {
  name: string;
  phone: string;
  email?: string;
  concern?: string;
  message?: string;
  source?: string;
}

export async function sendEnquiryEmail(data: EnquiryEmailData) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.warn(
      "EmailJS configuration missing: Please set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in your .env file."
    );
    return {
      success: false,
      error: "EmailJS credentials are not configured.",
    };
  }

  // Template parameters containing multiple variations to match common EmailJS template field names
  const templateParams = {
    name: data.name,
    from_name: data.name,
    user_name: data.name,
    phone: data.phone,
    user_phone: data.phone,
    contact_number: data.phone,
    email: data.email || "Not provided",
    user_email: data.email || "Not provided",
    reply_to: data.email || "",
    concern: data.concern || "General Enquiry",
    hair_concern: data.concern || "General Enquiry",
    message: data.message || "No additional message",
    source: data.source || "Website Enquiry",
    submission_date: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
  };

  try {
    const res = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    return { success: true, status: res.status, text: res.text };
  } catch (error: any) {
    console.error("EmailJS error:", error);
    return {
      success: false,
      error: error?.text || error?.message || "Failed to send email via EmailJS",
    };
  }
}

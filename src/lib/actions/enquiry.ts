"use server";

import { connectToDatabase } from "@/lib/db/mongodb";
import Enquiry from "@/lib/db/models/Enquiry";

export interface EnquiryInput {
  name: string;
  phone: string;
  email?: string;
  concern?: string;
  message?: string;
  source?: string;
}

export async function submitEnquiry(data: EnquiryInput) {
  try {
    await connectToDatabase();
    const enquiry = await Enquiry.create({
      name: data.name,
      phone: data.phone,
      email: data.email || "",
      concern: data.concern || "General Consultation",
      message: data.message || "",
      source: data.source || "Website Form",
      status: "new",
    });

    return {
      success: true,
      id: enquiry._id.toString(),
    };
  } catch (error: any) {
    console.error("Error creating enquiry in DB:", error);
    return {
      success: false,
      error: error?.message || "Failed to record enquiry",
    };
  }
}

export async function getEnquiries() {
  try {
    await connectToDatabase();
    const enquiries = await Enquiry.find().sort({ createdAt: -1 }).lean();
    return {
      success: true,
      enquiries: JSON.parse(JSON.stringify(enquiries)),
    };
  } catch (error: any) {
    console.error("Error fetching enquiries:", error);
    return {
      success: false,
      error: error?.message || "Failed to fetch enquiries",
    };
  }
}

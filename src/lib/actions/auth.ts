"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE_NAME = "trichova_admin_session";

export async function loginAdmin(formData: { username?: string; password?: string }) {
  try {
    const username = (formData?.username || "").trim();
    const password = formData?.password || "";

    const ADMIN_USERNAME = (process.env.ADMIN_USERNAME || "").trim();
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "";

    if (!ADMIN_USERNAME || !ADMIN_PASSWORD) {
      return {
        success: false,
        error: "Invalid admin email or password.",
      };
    }

    // Strict credential verification
    const isUserValid = username.toLowerCase() === ADMIN_USERNAME.toLowerCase();
    const isPassValid = password === ADMIN_PASSWORD;

    if (!isUserValid || !isPassValid) {
      return {
        success: false,
        error: "Invalid admin email or password.",
      };
    }

    // Set secure HTTP-only cookie valid for 7 days
    const cookieStore = await cookies();
    cookieStore.set(COOKIE_NAME, "authenticated_admin_token_2026", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return { success: true, error: null };
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Authentication failed";
    return { success: false, error: msg };
  }
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
  redirect("/admin/login");
}

export async function isAdminAuthenticated(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME);
    return token?.value === "authenticated_admin_token_2026";
  } catch {
    return false;
  }
}

import type { Metadata } from "next";
import LoginPage from "./_components/LoginPage";

export const metadata: Metadata = {
  title: "Login - E-Learning Platform",
  description: "Login to access your courses and profile",
};

export default function Login() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <LoginPage />
    </div>
  );
}

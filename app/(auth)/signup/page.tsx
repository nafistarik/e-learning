import type { Metadata } from "next"
import SignUpPage from "./_signup_components/SignupPage"

export const metadata: Metadata = {
  title: "Sign Up - E-Learning Platform",
  description: "Create an account to start learning",
}

export default function SignUp() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <SignUpPage/>
    </div>
  )
}


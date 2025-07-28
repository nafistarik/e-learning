"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateUserMutation } from "@/redux/api/authApi";
import { toast } from "sonner";
import { SignUpFormData } from "@/types/auth-types";

export default function SignUpPage() {
  const { register, handleSubmit } = useForm<SignUpFormData>();
  const [createUser, { isLoading, isError, error }] = useCreateUserMutation();
  const router = useRouter();

  const onSubmit = async (data: SignUpFormData) => {
    if (data.password !== data.confirmPassword) {
      toast("Passwords do not match");
      return;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);

    try {
      await createUser(formData).unwrap();
      toast("User registered successfully!");
      router.push("/login");
    } catch (err) {
      console.error(err);
      toast("Registration failed. Please try again.");
    }
  };

  return (
    <div className="container flex h-screen flex-col items-center justify-center">
      <Card className="sm:max-w-[550px] w-full">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Enter your information to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name">Full Name</label>
              <Input id="name" {...register("name")} />
            </div>
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="user@example.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password">Password</label>
              <Input id="password" type="password" {...register("password")} placeholder="password" />
            </div>
            <div className="space-y-2">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Input
                id="confirmPassword"
                type="password"
                {...register("confirmPassword")}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing Up..." : "Sign Up"}
            </Button>
          </form>
          {isError && (
            <p className="text-red-500 mt-2">
              Error:{" "}
              {error && "data" in error
                ? (error.data as { message: string }).message
                : "Something went wrong"}
            </p>
          )}
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary underline-offset-4 hover:underline"
            >
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

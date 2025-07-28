"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
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
import { useLoginUserMutation } from "@/redux/api/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slice/userSlice";
import { toast } from "sonner";
import { LoginFormData } from "@/types/auth-types";

export default function LoginPage() {
  const { register, handleSubmit, setValue } = useForm<LoginFormData>();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const fillAdminCredentials = () => {
    setValue("email", "abc@admin.com");
    setValue("password", "123");
  };

  const fillUserCredentials = () => {
    setValue("email", "user@gmail.com");
    setValue("password", "123456");
  };

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await loginUser(data).unwrap();
      dispatch(setUser({ data: response.user })); // Store user & token in Redux and localStorage
      localStorage.setItem("accessToken", response.token);
      toast.success("Login successful!");
      router.push("/");
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="container flex h-screen flex-col items-center justify-center">
      <Card className="sm:max-w-[550px] w-full">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="m@example.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password">Password</label>
              <Input id="password" type="password" placeholder="" {...register("password")} />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>

            <div className="flex justify-between gap-2 flex-col sm:flex-row">
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={fillAdminCredentials}
              >
                Use Admin Credentials
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={fillUserCredentials}
              >
                Use User Credentials
              </Button>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col">
          <div className="text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-primary underline-offset-4 hover:underline"
            >
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

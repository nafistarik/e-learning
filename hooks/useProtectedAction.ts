import { selectUser } from "@/redux/slice/userSlice";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { toast } from "sonner";

export default function useProtectedAction() {
  const { user } = useSelector(selectUser);
  const router = useRouter();
  const protect = (action: () => void | Promise<void>) => {
    return async () => {
      if (!user) {
        toast.success("Please login to continue");
        router.push("/login");
        return;
      }
      try {
        await action();
      } catch (error) {
        console.error("Protected action failed:", error);
      }
    };
  };
  return { protect };
}

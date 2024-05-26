"use client";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { logOut, logIn } from "@/redux/slices/auth-slice";
import { authenticateUser, getCurrentUser } from "@/actions/actions";
import { useAppDispatch } from "@/redux/hooks";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleLogin = async () => {
    setSubmitting(true);
    const auth = await authenticateUser(username, password);

    if (auth) {
      const getRequest = async () => {
        const user = await getCurrentUser();

        dispatch(logIn(user.data));
      };
      await getRequest();
      router.push("/");
    } else {
      setError("Invalid username or password.");
    }
    setSubmitting(false);
  };

  // const handleGuest = async () => {
  //   setSubmitting(true);
  //   const auth = await loginAsGuest();
  //   if (auth) {
  //     router.push("/movies/search");
  //   } else {
  //     setError("Invalid username or password.");
  //   }
  //   setSubmitting(false);
  // };

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input
        type="email"
        label="Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        label="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button color="success" onClick={handleLogin}>
        Success
      </Button>
    </div>
  );
}

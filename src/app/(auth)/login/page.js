"use client";
import { useSession } from "next-auth/react";

const Login = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return <p>Signed in as {session.user.email}</p>;
  }

  return <a href="/api/auth/signin">Sign in</a>;
};
export default Login;

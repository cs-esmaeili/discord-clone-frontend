'use client'

import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc";
import Link from "next/link"

export default function GoogleButton() {
  return (
    <Button asChild className="w-fit p-7">
      <Link href="http://localhost:3000/auth/google">
        <FcGoogle />
        <span className="text-md text-primary-foreground">
          LogIn With Google
        </span>
      </Link>
    </Button>
  );
}

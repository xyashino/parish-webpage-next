"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { ExitIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
import { ConfirmAlert } from "./ConfirmAlert";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const triggerValue = (
  <>
    <ExitIcon className="text-background" />
    <p className="text-background">Wyloguj</p>
  </>
);
export const LogoutAlert = ({ className }: Props) => (
  <div className={cn("space-y-2 w-11/12 mx-auto", className)}>
    <Separator className="w-5/6 mx-auto" />
    <ConfirmAlert
      headerData={{
        title: "Czy na pewno chcesz się wylogować?",
        description: "Zostaniesz przekierowany na stronę główną.",
      }}
      triggerData={{
        triggerValue,
        className:
          "w-full mx-auto flex items-center justify-center space-x-2.5 rounded-xl p-2.5",
      }}
      footerData={{
        doAfterConfirm: () => signOut(),
      }}
    />
  </div>
);
import React, { PropsWithChildren } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { GearIcon } from "@radix-ui/react-icons";

interface Props extends PropsWithChildren {
  srText?: string;
}

export const DataTableActionsDropDown = ({
  srText = "Ustawienia menu",
  children,
}: Props) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild className="cursor-pointer">
      <Button variant="ghost" className="h-8 w-8 p-0" tabIndex={0}>
        <span className="sr-only">{srText}</span>
        <GearIcon className="h-5 w-5" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">{children}</DropdownMenuContent>
  </DropdownMenu>
);

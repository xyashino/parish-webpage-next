import React from "react";
import ConfirmAlert from "@/components/ConfirmAlert";
import { ResetIcon } from "@radix-ui/react-icons";

interface Props {
  onConfirm: () => void;
}

const triggerValue = (
  <>
    <ResetIcon className="mr-2 h-4 w-4" /> Wyczyść
  </>
);

export const ClearButtonWithAlert = ({ onConfirm }: Props) => (
  <ConfirmAlert
    headerData={{
      title: "Czy na pewno chcesz wyczyścić ogłoszenia?",
      description:
        "Zmiany zostaną zrobione lokalnie. Musisz je zapisać, aby utrwalić.",
    }}
    triggerData={{
      triggerValue,
      className: "w-1/4",
    }}
    footerData={{
      doAfterConfirm: onConfirm,
      confirmText: "Wyczyść",
    }}
  />
);
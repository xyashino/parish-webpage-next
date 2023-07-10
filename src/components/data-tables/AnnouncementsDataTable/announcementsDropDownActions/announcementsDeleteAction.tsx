import React, { SyntheticEvent } from "react";
import DataTableActionsDropDawnItem from "@/components/DataTable/DataTableActionsDropDawnItem";
import { TrashIcon } from "@radix-ui/react-icons";
import toast from "react-hot-toast";

interface Props {
  id: string;
}

const AnnouncementsDeleteAction = ({ id }: Props) => {
  const handleDelete = (e?: SyntheticEvent) => {
    e?.preventDefault();
    console.log("Delete");
    toast.success("Usunięto ogłoszenie o id: " + id);
  };

  return (
    <DataTableActionsDropDawnItem
      text="Usuń"
      Icon={TrashIcon}
      onClick={handleDelete}
      className="text-red-500"
    />
  );
};

export default AnnouncementsDeleteAction;

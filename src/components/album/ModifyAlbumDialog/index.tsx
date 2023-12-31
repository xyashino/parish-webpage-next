"use client";
import React from "react";
import { CustomDialog } from "@/components/CustomDialog";
import { modifyAlbumSchema } from "@/lib/schemas/album";
import { useModifyAlbumLogic } from "@/lib/hooks/useModifyAlbumLogic";
import { ModifyAlbumDialogFormFields } from "./modifyAlbumDialogFormFields";
import { SelectCategoryProps } from "./selectCategoryFormField/selectCategoryContent";

export const ModifyAlbumDialog = (props: SelectCategoryProps) => {
  const { headerData, submitMethod, defaultValues, isOpen, setIsOpen } =
    useModifyAlbumLogic();
  return (
    <CustomDialog
      trigger={{ text: "Dodaj Album" }}
      headerData={headerData}
      form={{
        formSchema: modifyAlbumSchema,
        onSubmit: submitMethod,
        defaultValues,
        className: "space-y-4",
      }}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <ModifyAlbumDialogFormFields {...props} />
    </CustomDialog>
  );
};

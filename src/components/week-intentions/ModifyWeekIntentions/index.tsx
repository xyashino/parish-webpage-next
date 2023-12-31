"use client";
import React, { useLayoutEffect } from "react";
import { ModifyWeekIntentionsForm } from "./modifyWeekIntentionsForm";
import { WeekIntentionsStoreData } from "@/types/week-intentions-store";
import { ModifyWeekIntentionsTabs } from "./modifyWeekIntentionsTabs";
import { ModifyWeekIntentionsControls } from "./modifyWeekIntentionsControls";
import { ModifyIntentionsCard } from "./modifyIntentionsCard";
import { useWeekIntentionsStore } from "@/lib/store/useWeekIntentionsStore";
import { useMdEditorStore } from "@/lib/store/useMdEditorStore";

interface Props {
  defaultValue?: WeekIntentionsStoreData;
}

export const ModifyWeekIntentions = ({ defaultValue }: Props) => {
  const { clearAll, updateAll } = useWeekIntentionsStore();
  const { setEditorValue } = useMdEditorStore();

  useLayoutEffect(() => {
    setEditorValue("");
    if (defaultValue) return updateAll(defaultValue);
    clearAll();
  }, [defaultValue, updateAll, clearAll, setEditorValue]);

  return (
    <div className="w-full mx-4 lg:w-11/12 lg:mx-auto space-y-8">
      <div className="flex flex-col lg:flex-row lg:flex-wrap justify-around space-x-2 rounded-xl lg:w-full mx-auto space-y-4">
        <ModifyWeekIntentionsControls />
        <ModifyIntentionsCard />
      </div>
      <ModifyWeekIntentionsForm />
      <ModifyWeekIntentionsTabs />
    </div>
  );
};

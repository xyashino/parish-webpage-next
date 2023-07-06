import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { DayIntentions } from "@/types/interfaces/week-intentions-store.interface";
import ModifyDayHeader from "@/components/ModifyWeekIntentions/modifyDayIntentions/modifyDayHeader";
import ModifyIntentionsTable from "../modifyIntentionsTable";
import ModifyDayEmptyTableInfo from "@/components/ModifyWeekIntentions/modifyDayIntentions/modifyDayEmptyTableInfo";

interface Props extends DayIntentions {
  id: string;
}

const ModifyDayIntentions = ({ intentions, ...rest }: Props) => {
  return (
    <>
      <TabsContent
        value={rest.id}
        className="mx-auto mt-4 w-full rounded-2xl shadow"
      >
        <ModifyDayHeader {...rest} />
        <div className="flex w-full flex-col bg-slate-200 mb-8">
          {intentions.length === 0 ? (
            <ModifyDayEmptyTableInfo />
          ) : (
            <ModifyIntentionsTable intentions={intentions} />
          )}
        </div>
      </TabsContent>
    </>
  );
};

export default ModifyDayIntentions;
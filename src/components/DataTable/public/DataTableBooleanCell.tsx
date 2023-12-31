import React from "react";

interface Props {
  value: boolean;
}

export const DataTableBooleanCell = ({ value }: Props) => {
  const className = value ? "bg-green-700" : "bg-red-500";

  return (
    <span
      className={`px-2 py-1 select-none rounded-md text-white text-xs  uppercase font-bold ${className} mx-auto`}
    >
      {value ? "Tak" : "Nie"}
    </span>
  );
};

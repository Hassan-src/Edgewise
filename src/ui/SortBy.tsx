import { useSearchParams } from "react-router-dom";

import Select from "./Select";
import type { ChangeEvent } from "react";

type OptionProps = {
  label: string;
  value: string;
};

type SortByProps = {
  options: OptionProps[];
  sortField: string;
};

function SortBy({ options, sortField }: SortByProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get(sortField) || "";
  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    searchParams.set(sortField, e.target.value);
    if (searchParams.get("page")) searchParams.set("page", "1");
    setSearchParams(searchParams);
  }
  return (
    <Select options={options} onChange={handleChange} value={sortBy}></Select>
  );
}

export default SortBy;

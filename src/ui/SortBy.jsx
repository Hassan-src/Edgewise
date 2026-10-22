import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options, sortField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get(sortField) || "";
  function handleChange(e) {
    searchParams.set(sortField, e.target.value);
    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  }
  return (
    <Select options={options} onChange={handleChange} value={sortBy}></Select>
  );
}

export default SortBy;

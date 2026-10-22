import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getTrades } from "../../services/apiTrades";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import { useEffect, useMemo } from "react";

export function useTrades() {
  const queryClient = useQueryClient();
  // Pagination
  const [searchParams] = useSearchParams();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  // Filter
  const filterValue = searchParams.get("source");
  const filter = useMemo(
    () =>
      !filterValue || filterValue === "all"
        ? null
        : { field: "source", value: filterValue },
    [filterValue],
  );

  // Sort side
  const sideRaw = searchParams.get("side") || "all-all";
  const [sideField, sideDirection] = sideRaw.split("-");
  const sideSort = useMemo(
    () => ({
      field: sideField,
      direction: sideDirection,
    }),
    [sideField, sideDirection],
  );
  // sort profit
  const profitRaw = searchParams.get("profit") || "all-all";
  const [profitField, profitDirection] = profitRaw.split("-");
  const profitSort = useMemo(
    () => ({
      field: profitField,
      direction: profitDirection,
    }),
    [profitField, profitDirection],
  );
  // sort symbol
  const symbolRaw = searchParams.get("symbol") || "all-all";
  const [symbolField, symbolDirection] = symbolRaw.split("-");
  const symbolSort = useMemo(
    () => ({
      field: symbolField,
      direction: symbolDirection,
    }),
    [symbolField, symbolDirection],
  );
  // fetching the data
  const {
    isLoading,
    data: { data: trades, count } = {},
    error,
  } = useQuery({
    queryKey: ["trades", filter, sideSort, profitSort, symbolSort, page],
    queryFn: () =>
      getTrades({ filter, sideSort, profitSort, symbolSort, page }),
  });
  // Pre-fetching
  const pageCount = Math.ceil(count / PAGE_SIZE);
  useEffect(
    function () {
      if (page < pageCount)
        queryClient.prefetchQuery({
          queryKey: [
            "trades",
            filter,
            sideSort,
            profitSort,
            symbolSort,
            page + 1,
          ],
          queryFn: () =>
            getTrades({
              filter,
              sideSort,
              profitSort,
              symbolSort,
              page: page + 1,
            }),
        });
      if (page > 1)
        queryClient.prefetchQuery({
          queryKey: [
            "trades",
            filter,
            sideSort,
            profitSort,
            symbolSort,
            page - 1,
          ],
          queryFn: () =>
            getTrades({
              filter,
              sideSort,
              profitSort,
              symbolSort,
              page: page - 1,
            }),
        });
    },
    [
      count,
      page,
      pageCount,
      queryClient,
      filter,
      sideSort,
      profitSort,
      symbolSort,
    ],
  );

  return { isLoading, trades: trades ?? [], error, count: count ?? 0 };
}

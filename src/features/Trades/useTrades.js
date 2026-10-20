import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getTrades } from "../../services/apiTrades";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import { useEffect } from "react";

export function useTrades() {
  const queryClient = useQueryClient();
  // Pagination
  const [searchParams] = useSearchParams();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  // fetching the data
  const {
    isLoading,
    data: { data: trades, count } = {},
    error,
  } = useQuery({
    queryKey: ["trades", page],
    queryFn: () => getTrades({ page }),
  });
  // Pre-fetching
  const pageCount = Math.ceil(count / PAGE_SIZE);
  useEffect(
    function () {
      if (page < pageCount)
        queryClient.prefetchQuery({
          queryKey: ["trades", page + 1],
          queryFn: () => getTrades({ page: page + 1 }),
        });
      if (page > 1)
        queryClient.prefetchQuery({
          queryKey: ["trades", page - 1],
          queryFn: () => getTrades({ page: page - 1 }),
        });
    },
    [count, page, pageCount, queryClient],
  );

  return { isLoading, trades: trades ?? [], error, count: count ?? 0 };
}

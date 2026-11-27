import { useEffect, useRef } from "react";

type UseClickOutsideProps = {
  handler: () => void;
  listenCapturing?: boolean;
};

export function useClickOutside<T extends HTMLElement = HTMLDivElement>({
  handler,
  listenCapturing = true,
}: UseClickOutsideProps) {
  const ref = useRef<T>(null);

  useEffect(
    function () {
      function handelClick(e: MouseEvent) {
        if (
          ref.current &&
          e.target instanceof Node &&
          !ref.current.contains(e.target)
        ) {
          handler();
        }
      }
      document.addEventListener("click", handelClick, listenCapturing);
      return () =>
        document.removeEventListener("click", handelClick, listenCapturing);
    },
    [handler, listenCapturing],
  );
  return ref;
}

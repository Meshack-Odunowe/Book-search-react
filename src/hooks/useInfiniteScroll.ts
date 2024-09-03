import { useState, useEffect, useCallback } from "react";

type SetIsFetchingFunction = React.Dispatch<React.SetStateAction<boolean>>;

const useInfiniteScroll = (callback: () => void): [boolean, SetIsFetchingFunction] => {
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const isScrolling = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  }, [isFetching]);

  useEffect(() => {
    window.addEventListener("scroll", isScrolling);
    return () => window.removeEventListener("scroll", isScrolling);
  }, [isScrolling]);

  useEffect(() => {
    if (!isFetching) return;
    callback();
  }, [isFetching, callback]);

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
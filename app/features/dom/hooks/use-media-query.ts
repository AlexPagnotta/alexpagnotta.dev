import { useEffect, useState } from "react";

import { parseAndMatch } from "~/features/dom/utils/media-query";

export const useMediaQuery = (query: string, defaultState = false) => {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    let mounted = true;
    const mql = parseAndMatch(query);

    const onChange = () => {
      if (!mounted) return;
      setState(!!mql.matches);
    };

    if (mql.addEventListener) {
      mql.addEventListener("change", onChange);
    } else {
      mql.addListener(onChange); // iOS 13 and below
    }

    setState(mql.matches);

    return () => {
      mounted = false;

      if (mql.removeEventListener) {
        mql.removeEventListener("change", onChange);
      } else {
        mql.removeListener(onChange); // iOS 13 and below
      }
    };
  }, [query]);

  return state;
};

import { useEffect } from "react";
import createPersistedState from "use-persisted-state";
const useBarState = createPersistedState();

const useBars = () => {
  const [bars, setBars] = useBarState([]);

  useEffect(() => {
    fetch(`https://control-server.now.sh/`)
      .then(body => body.json())
      .then(response => {
        setBars(response);
      });
  }, []);

  return [bars, setBars];
};

export default useBars;

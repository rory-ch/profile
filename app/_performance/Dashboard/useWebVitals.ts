import { useReportWebVitals } from "next/web-vitals";
import { Reducer, useReducer } from "react";
import { WebVital } from "./types";

const isWebVital = (value: string): value is WebVital => value in WebVital;

type Metric = null | {
  id: string;
  rating: string;
  value: number;
};

type State = Record<WebVital, Metric>;

type Action = {
  type: WebVital;
  payload: Metric;
};

/**
 * Write each metric only once.
 */
const reducer: Reducer<State, Action> = (state, { type, payload }) => {
  if (state[type]) return state;
  return {
    ...state,
    [type]: payload,
  };
};

const defaultState: State = {
  [WebVital.CLS]: null,
  [WebVital.FCP]: null,
  [WebVital.FID]: null,
  [WebVital.INP]: null,
  [WebVital.LCP]: null,
  [WebVital.TTFB]: null,
};

export const useWebVitals = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  useReportWebVitals(({ id, name, rating, value }) => {
    if (!isWebVital(name)) return;
    const action: Action = {
      type: name,
      payload: {
        id,
        rating,
        value,
      },
    };

    dispatch(action);
  });

  return state;
};

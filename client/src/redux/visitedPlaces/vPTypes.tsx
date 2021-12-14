import { Place } from "../../types/Placetype";

export const URL_FETCH_SUCCESS = "URL_FETCH_SUCCESS";
export const URL_FETCH_REQUEST = "URL_FETCH_REQUEST";
export const URL_FETCH_FAILURE = "URL_FETCH_FAILURE";

export type urlState = {
  loading: boolean;
  data: Place[];
  error: string;
};

import {api} from "./instance";
import {ApiResponse} from "./types/types";

export async function getResult(expression: string) {
  const {data} = await api.post<ApiResponse>("/calculate", {
    Expression: expression,
  })

  return data
}
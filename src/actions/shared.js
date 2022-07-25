import { getInitialData } from "../utils/api";
import { receiveTweets } from "./tweet";
import { receiveUsers } from "./users";

export function handleInitialData() {
  return async (dispatch) => {
    const { users, tweets } = await getInitialData();
    dispatch(receiveUsers(users));
    dispatch(receiveTweets(tweets));
  };
}

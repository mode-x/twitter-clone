import { getInitialData } from "../utils/api";
import { receiveTweets } from "./tweets";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  return async (dispatch) => {
    const { users, tweets } = await getInitialData();
    dispatch(receiveUsers(users));
    dispatch(receiveTweets(tweets));
    dispatch(setAuthedUser(AUTHED_ID));
  };
}

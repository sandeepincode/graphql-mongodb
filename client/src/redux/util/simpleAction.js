/**
 * Created by sandeep on 16/01/2018.
 */
export default function simpleAction(type, payload) {
  return value => ({
    type,
    payload: value,
  });
}

import * as constants from "lib/constants";
import * as actions from "../index";

const props = {
  _id: "23i8243j438j34218j8",
  email: "test~test.com",
  firstName: "Bob",
  lastName: "Dole",
  userName: "Bob Dole",
  backgroundInfo: "Cool.",
  address: {
    street: "123 Galena St.",
    state: "GA",
    suite: "",
    city: "Atlanta",
    zipCode: "55555"
  }
};

const _id = "123456789";

describe("User Actions", () => {
  it("returns USERS_CREATE with props", () => {
    const value = actions.createUser(props);

    expect(value).toEqual({ type: constants.USERS_CREATE, payload: props });
  });

  it("returns USERS_DELETE with an id", () => {
    const value = actions.deleteUser(_id);

    expect(value).toEqual({ type: constants.USERS_DELETE, payload: _id });
  });

  it("returns USERS_FETCH", () => {
    const value = actions.fetchUsers();

    expect(value).toEqual({ type: constants.USERS_FETCH });
  });

  it("returns USERS_RESET", () => {
    const value = actions.resetUsers();

    expect(value).toEqual({ type: constants.USERS_RESET });
  });

  it("returns USERS_SEED", () => {
    const value = actions.seedDB();

    expect(value).toEqual({ type: constants.USERS_SEED });
  });

  it("returns USERS_SET_DATA with data", () => {
    const data = [props];
    const value = actions.setUsers(data);

    expect(value).toEqual({ type: constants.USERS_SET_DATA, payload: data });
  });

  it("returns USERS_SET_DATA with empty data", () => {
    const value = actions.setUsers([]);

    expect(value).toEqual({ type: constants.USERS_SET_DATA, payload: [] });
  });

  it("returns USERS_UPDATE with props and an id", () => {
    const payload = { ...props, _id };
    const value = actions.updateUser(payload);

    expect(value).toEqual({ type: constants.USERS_UPDATE, payload });
  });
});

import { decorate, observable, computed, flow, action } from "mobx";
import axios from "axios";

const store = decorate(
  class {
    users = [];

    get getUserInfo() {
      console.log(this.users);
      return this.users;
    }

    fetchUsers = flow(function*(arg) {
      const fetched = yield axios("https://jsonplaceholder.typicode.com/users");
      console.log(fetched.data);
      this.users = fetched.data;
    });
  },
  {
    users: observable,
    getUserInfo: computed,
    fetchUsers: action
  }
);

export default new store();

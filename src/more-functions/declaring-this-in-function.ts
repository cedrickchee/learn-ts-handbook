/**
 * Declaring `this` in a Function
 */

const user = {
  id: 123,

  admin: false,
  becomeAdmin: function() {
    this.admin = true;
  },
};

interface User {
  id: number;
  admin: boolean;
}
declare const getDB: () => DB;
// ---cut---
interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

const db = getDB();
const admins = db.filterUsers(function () {
  return this.admin
});
// Note that you need to use function and not arrow functions to
// get this behavior:
// const admins = db.filterUsers(() => this.admin);
                                     // ^ Error: Object is possibly 'undefined'.

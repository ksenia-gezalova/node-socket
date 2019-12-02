class Users {
  constructor() {
    this.users = [];
  }

  add(id, name, room) {
    this.users.push({
      id,
      name,
      room
    });
  }

  get(id) {
    return this.users.find(user => user.id === id);
  }

  remove(id) {
    const user = this.get(id);

    if (user) {
      this.users = this.users.filter(u => u.id !== user.id);
    }

    return user;
  }

  getByRoom(room) {
    return this.users.filter(user => user.room === room);
  }
}

module.exports = function() {
  return new Users();
};

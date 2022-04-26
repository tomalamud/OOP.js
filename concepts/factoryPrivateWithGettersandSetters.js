function createStudent({
  name,
  email,
}) {
  const private = {
    "_email": email,
  }
  const public = {
    name,
    get name() {
      return private._email;
    },
    set name(newEmail) {
      return private._email = newEmail;
    },
  }
  return public;
}

const arturito = createStudent({
  name: "Arturo",
  email: "arturito@gmail.com",
})
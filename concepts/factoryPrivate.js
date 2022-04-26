function requiredParams(param) {
  throw new Error(param + " is required");
};

function createStudent({
  name = requiredParams("name"),
  email = requiredParams("email"),
  age,
  socialMedia = [], // Array default
  approvedCourses = [],
  learningPath = [],
}) {
  const private = {
    "_email": email,
  }
  const public = {
    name,
    age,
    socialMedia,
    approvedCourses,
    learningPath,
    changeEmail(newEmail) {
      private._email = newEmail;
    },
    readEmail() {
      return private._email;
    },
  }

  Object.defineProperty(public, "changeEmail", {
    configurable: false,
    writable: false,
  })

  Object.defineProperty(public, "readEmail", {
    configurable: false,
    writable: false,
  })

  return public;
}

const arturito = createStudent({
  name: "Arturo",
  email: "arturito@gmail.com",
})
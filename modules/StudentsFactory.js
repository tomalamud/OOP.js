import { requiredParams } from '../utils/requiredParams';

function studentsFactory({
  name = requiredParams("name"),
  email = requiredParams("email"),
  age,
  socialMedia = [],
  approvedCourses = [],
  learningPath = [],
}) {
  const privateInfo = {
    "_email": email,
  }
  const publicInfo = {
    name,
    age,
    socialMedia,
    approvedCourses,
    learningPath,
    changeEmail(newEmail) {
      privateInfo._email = newEmail;
    },
    readEmail() {
      return privateInfo._email;
    },
  }

  Object.defineProperty(publicInfo, "changeEmail", {
    configurable: false,
    writable: false,
  })

  Object.defineProperty(publicInfo, "readEmail", {
    configurable: false,
    writable: false,
  })

  return publicInfo;
}

const arturito = studentsFactory({
  name: "Arturo",
  email: "arturito@gmail.com",
})
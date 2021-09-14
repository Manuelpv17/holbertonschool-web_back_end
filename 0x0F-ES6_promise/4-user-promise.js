export default function signUpUser(firstName, lastName) {
  const singUp = Promise.resolve({
    firstName,
    lastName,
  });
  return singUp;
}

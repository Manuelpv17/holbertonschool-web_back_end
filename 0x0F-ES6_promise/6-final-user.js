import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  const user = await signUpUser(firstName, lastName);
  let photo;
  try {
    photo = await uploadPhoto(fileName);
  } catch (err) {
    photo = err.toString();
  }
  return [
    { value: user, status: 'fulfilled' },
    { value: photo, status: 'rejected' },
  ];
}

export default handleProfileSignup;

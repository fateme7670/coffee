import { cookies } from 'next/headers'
import usermodel from '@/models/User'
import { verifyToken } from './auth';
import { connectToDB } from '@/configs/db';
export const authUser = async () => {
  connectToDB();
  const token = cookies().get("token");
  let user = null;

  if (token) {
    const tokenPayload = verifyToken(token.value);
    if (tokenPayload) {
      user = await usermodel.findOne({ email: tokenPayload.email });
    }
  }

  return user;
};
export const authAdmin = async () => {
  connectToDB();
  const token = cookies().get("token");
  let user = null;

  if (token) {
    const tokenPayload = verifyToken(token.value);
    if (tokenPayload) {
      user = await usermodel.findOne({ email: tokenPayload.email });
      if (user.role === 'Admin') {
        return user
      } else {
        return null
      }
    } else {
      return null
    }
  } else {
    return null
  }

  return user;
};
import { getCurrentUser } from '@/actions/actions';
import { cookies } from 'next/headers';
import NavbarUserItem from './navbarUserItem';

export default async function NavbarUser() {
  const accessToken = cookies().get('access_token');
  const userInfo = accessToken ? await getCurrentUser(accessToken.value) : null;
  const userInfoResponse = userInfo?.success ? userInfo.data : null;
  return <NavbarUserItem userInfo={userInfoResponse} />;
}

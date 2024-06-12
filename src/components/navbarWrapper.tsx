import { getCurrentUser } from '@/actions/auth-action';
import Navbar from './navbar/navbar';

const NavbarWrapper = async () => {
  const currentUserInfo = await getCurrentUser();
  console.log('NavbarWrapper');
  return <Navbar userInfo={currentUserInfo} />;
};
export default NavbarWrapper;

import { User } from '../../user/user.entity';

export default class TestUtil {
  static giveMeAValidUser(): User {
    const user = new User();
    user.password = 'validPassword';
    user.email = 'valid@email.com';
    user.name = 'Valid name';
    user.id = '1';
    return user;
  }
}

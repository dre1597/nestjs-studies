const ROLES = {
  USER: 'USER',
  ADMIN: 'ADMIN',
};

export type USER_ROLES = keyof typeof ROLES;

export type UserProps = {
  name: string;
  password: string;
  email: string;
  phone: string;
  cpf: string;
  role?: USER_ROLES;
};

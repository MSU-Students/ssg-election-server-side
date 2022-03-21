export interface User {
  account_id?: number;
  username: string;
  password: string;
  userType: string;
  status: 'active' | 'disabled';
}

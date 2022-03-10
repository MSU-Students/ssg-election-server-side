export interface User {
  account_id?: number;
  username: string;
  password: string;
  status: 'active' | 'disabled';
}

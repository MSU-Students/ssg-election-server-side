export interface User {
  account_id?: number;
  username: string;
  password: string;
  userType: 'voter' | 'admin' | 'rep' | 'ssg';
  status: 'active' | 'disabled';
}

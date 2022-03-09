export interface Voter {
  voter_id?: number;
  candidate_id: number;
  election_id: number;
  account_id: number;
  date: string;
}

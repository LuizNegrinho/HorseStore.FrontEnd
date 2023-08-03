export interface Bid {  
  id: number;
  userId: number;
  lotId: number;
  username: string;
  location: string;
  date: string; // A data é uma string no formato "YYYY-MM-DD"
  value: number;
}
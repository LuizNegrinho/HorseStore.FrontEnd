export interface Lot {
  id: number;
  imageUrl: string;
  name: string;
  sufix: string;
  birthDate: string;
  sellPrice: number;
  minPrice: number;
  bids: number[];
  mother: string;
  father: string;
  maxBid: string;
  maxBidUserId: number;
}

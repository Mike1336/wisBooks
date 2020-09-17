export interface IFilters {
  genres: string[];
  prices: {
    price_gt: string;
    price_lt: string;
  };
  releases: {
    release_date_gt: Date;
    release_date_lt: Date;
  };
}

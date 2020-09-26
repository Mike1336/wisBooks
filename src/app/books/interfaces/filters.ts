export interface IFilters {
  genres: string[];
  prices: {
    minPrice: string;
    maxPrice: string;
  };
  releases: {
    releaseDateFrom: Date;
    releaseDateTo: Date;
  };
}

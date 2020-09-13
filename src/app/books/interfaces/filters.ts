export interface IFilters {
  genres: string[];
  prices: {
    minPrice: string;
    maxPrice: string;  
  }
  releases: {
    releaseFrom: Date;
    releaseTo: Date;  
  }
}

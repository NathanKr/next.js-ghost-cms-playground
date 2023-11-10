  export default interface IPagination {
    page: number;
    limit: number;
    pages: number;
    total: number;
    next?: any;
    prev?: any;
  }
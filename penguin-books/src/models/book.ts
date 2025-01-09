export interface Book {
  id: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
}

export type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type BookResponse = {
  numFound: number;
  docs: Book[];
};

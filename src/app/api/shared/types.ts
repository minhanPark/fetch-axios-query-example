type Pageable = {
  page: number;
  size: number;
  totalElements: number;
  totalPages?: number;
};

export type CommonResponse<T = unknown> = {
  ok: boolean;
  error?: string;
  content?: T;
  pageable?: Pageable;
};

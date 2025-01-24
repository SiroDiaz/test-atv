export type AnimalResult = {
  type: string;
  id: number;
  url: string;
  title: string;
  description: string;
  image: string;
};

export type ResultErrorType = 'RESULT_NO_TERM_INPUT' | 'RESULT_EMPTY_HITS';

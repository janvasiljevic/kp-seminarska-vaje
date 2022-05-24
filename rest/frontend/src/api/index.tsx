import { useRef } from 'react';
import useSWR from 'swr';
import { IBook, IBookStore, IPagination } from '../interfaces';
import axiosInstace from './axiosInterface';

const fetcher = (url: string, query: any) => axiosInstace.get(url, { params: { ...query } }).then((res) => res.data);

interface IPaginationQuery {
  skip: number;
  take: number;
}

function useStickyResult<T>(value: T) {
  const val = useRef<T>();
  if (value !== undefined) val.current = value;
  return val.current;
}

export const useAllBooks = ({ skip, take }: IPaginationQuery) => {
  const { data, error } = useSWR<IPagination<IBook>>(['/book/', { skip, take }], fetcher, {});

  const stickyData = useStickyResult(data);

  return {
    data: stickyData,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useAllStores = () => {
  const { data, error } = useSWR<IBookStore[]>(['/book-store'], fetcher, {});

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useOneStore = (id: string) => {
  const { data, error } = useSWR<IBookStore>([`/book-store/${id}`], fetcher, {});

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useOneBook = (id: string) => {
  const { data, error } = useSWR<IBook>([`/book/${id}`], fetcher, {});

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useBook = (id: string | null) => {
  if (!id) {
    return {
      data: null,
      isLoading: false,
      isError: false,
    };
  }

  const { data, error } = useSWR<IBook>(`/book/${id}`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

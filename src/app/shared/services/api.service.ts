import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

type Response<T> = {
  body: T;
  headers: HttpHeaders;
};

@Injectable()
export class ApiService {
  baseUrl: string = 'https://rickandmortyapi.com/api';

  constructor(private httpClient: HttpClient) {}

  getPath(path: string) {
    return `${this.baseUrl}/${path}`;
  }

  get<T>(path: string, params?: Record<string, any>) {
    const searchParams = new URLSearchParams(params);

    return this.httpClient
      .get<T>(
        `${this.getPath(path)}${
          searchParams.size > 0 ? `?${searchParams.toString()}` : ''
        }`,
        {
          withCredentials: false,
          observe: 'response',
        }
      )
      .pipe(
        map((response) => {
          return {
            body: response.body as T,
            headers: response.headers,
          };
        })
      );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Attribute } from '../models/Attribute';

@Injectable({
  providedIn: 'root',
})
export class AttributeService {
  baseURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  fetch() {
    return this.http.get<Attribute[]>(`${this.baseURL}/attributes`);
  }

  fetchById(id: string) {
    return this.http.get<Attribute>(`${this.baseURL}/attributes/${id}`);
  }

  update(id: string, attribute: Attribute) {
    return this.http.put<Attribute>(`${this.baseURL}/attributes/${id}`, attribute);
  }

  create(attribute: Attribute) {
    return this.http.post<Attribute>(`${this.baseURL}/attributes`, attribute);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Attribute } from '../models/Attribute';

@Injectable()
export class AttributeMappingService {
  baseURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  fetch() {
    return this.http.get<Attribute[]>(`${this.baseURL}/attributes/mapping`);
  }

  fetchById(id: string) {
    return this.http.get<Attribute>(`${this.baseURL}/attributes/mapping${id}`);
  }

  update(id: string, attribute: Attribute) {
    return this.http.put<Attribute>(`${this.baseURL}/attributes/mapping${id}`, attribute);
  }

  create(attribute: Attribute) {
    return this.http.post<Attribute>(`${this.baseURL}/attributesmapping`, attribute);
  }
}

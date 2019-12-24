import { TestBed } from '@angular/core/testing';

import { DbCommunicationService } from './db-communication.service';

describe('DbCommunicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbCommunicationService = TestBed.get(DbCommunicationService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AuthinicateGuard } from './authinicate.guard';

describe('AuthinicateGuard', () => {
  let guard: AuthinicateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthinicateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SearchProductServiceService } from './search-product-service.service';

describe('SearchProductServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchProductServiceService]
    });
  });

  it('should ...', inject([SearchProductServiceService], (service: SearchProductServiceService) => {
    expect(service).toBeTruthy();
  }));
});

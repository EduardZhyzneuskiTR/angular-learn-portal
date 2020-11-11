import { ElementRef } from '@angular/core';
import { CreationDateStylingDirective } from './creation-date-styling.directive';

describe('CreationDateStylingDirective', () => {
  beforeEach(() => {
  });

  it('should create an instance', () => {
    const directive = new CreationDateStylingDirective(null);
    expect(directive).toBeTruthy();
  });
});

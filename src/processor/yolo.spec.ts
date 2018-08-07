import { expect } from 'chai';
import { describe } from 'mocha';
import { yolo } from './yolo';

describe('Yolo function', () => {
  it('should return yolo', () => {
    expect(yolo()).to.equal('Yolo!');
  });
});

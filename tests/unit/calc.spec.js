import calc from '@/components/calc';

describe('calc.js', () => {
  it('"2"+"3" => 5', () => {
    expect(calc('2', '3')).toBe(5);
  });
});

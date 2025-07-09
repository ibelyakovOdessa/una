import { expect } from 'chai';
import { diff } from 'jest-diff';

export function assertEntitiesEqual(actual: any, expected: any, options = {}) {
  const plainActual = actual.toPlain() ? actual.toPlain() : actual;
  const plainExpected = expected.toPlain() ? expected.toPlain() : expected;

  try {
    expect(plainActual).to.deep.equal(plainExpected);
  } catch (e) {
    console.error('Difference:', diff(plainActual, plainExpected));
    throw e;
  }
}
import { Spec } from '@xtest/spec';

const spec = new Spec();

spec.test('foo', async (context) => {
  context.is(true, true);
});

spec.test('bar', async (context) => {
  context.is(true, true);
  context.is(true, true);
  context.is(true, false);
});

export default spec;

import * as config from 'config';

const msg = config.get('message') as string;

test('foo', async () => {

  // 当然これは fail しない
  expect(1).toBe(1);

  // これだって fail しない
  expect({a: 1, b: 2}).toEqual({a: 1, b: 2});

  // ここで fail することを期待している
  expect(msg).toEqual("Hello, world.");

});

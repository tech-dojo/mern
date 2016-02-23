import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);


describe ('empty', () => {

  it ('should work', () => {
    expect(true).toEqual(true);
  });
});

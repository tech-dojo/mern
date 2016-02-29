import React from 'react';
import expect from 'expect';
import {Grid, Row, Col, Input, Panel, ButtonInput} from 'react-bootstrap';
import TestUtils from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

describe('CreateArticle', () => {

  function _formSubmit()  {

  }

  it('_formSubmit should be passed from CreateArticle to Form', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Form formSubmit ={_formSubmit}/>);
    const actual = renderer.getRenderOutput();
    const expected = <form onSubmit={() => {}}>
       <Input type="text" value={undefined} label="Title" required

        onChange={() => {}} placeholder="Enter Article Title"/>
      <Input type="textarea" value={undefined} label="Article Content"

         required onChange={() => {}} placeholder="Article Content: "/>
      <ButtonInput type="submit" value="Submit Button" bsStyle="primary"/>
    </form>;

    expect(actual).toIncludeJSX(expected);

  });
});

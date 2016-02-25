import React from 'react';
import expect from 'expect';
import {Grid, Row, Col} from 'react-bootstrap';
import TestUtils from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import CreateArticle from './../../../app/components/articles/CreateArticle.jsx';
import Form from './../../../app/components/articles/Form.jsx';

describe ('CreateArticle', () => {

  const Article = {title:'Article Title', content:'Article Content'};

  it ('should create an Article', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Form Article= {Article}/>);
    const actual = renderer.getRenderOutput().props.children.props.children.props.children;
    const expected ='Article Title';
    expect(actual).toIncludeJSX(expected);
    console.log(actual);
  });
});

// describe ('empty', () => {
//
//   it ('should work', () => {
//     expect(true).toEqual(true);
//   });
// });

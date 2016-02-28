import React from 'react';
import expect from 'expect';
import {Grid, Row, Col, Input, Panel, ButtonInput} from 'react-bootstrap';
import TestUtils from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import CreateArticle from './../../../app/components/articles/CreateArticle.jsx';
import Form from './../../../app/components/articles/Form.jsx';
import ListArticlesChild from './../../../app/components/articles/ListArticlesChild.jsx';
import ViewArticleChild from './../../../app/components/articles/ViewArticleChild.jsx';

describe('CreateArticle', () => {

  const Article = { title:'Article Title', content:'Article Content' };

  it('should create Article Title and Content', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Form Article= {Article}/>);
    const actual = renderer.getRenderOutput();
    const expected = 'Article Title';
    expect(actual).toIncludeJSX(expected);
    console.log(actual);
  });
});

describe('ListArticlesChild', () => {

  const Articles = [{ title:'Article Title1', content:'Article Content1' },
   { title:'Article Title2', content:'Article Content2' }];

  it('should have Article Array in list view', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<ListArticlesChild articles= {Articles}/>);
    const actual = renderer.getRenderOutput();
    const expected = <Panel header='Article Title1'>
       Article Content1

    </Panel>;
    const expected2 = <Panel header='Article Title2'>
       Article Content2

    </Panel>;
    expect(actual).toIncludeJSX(expected);
    expect(actual).toIncludeJSX(expected2);
  });
});

describe('ViewArticleChild', () => {

  const Article = { title:'Article Title', content:'Article Content' };

  it('should have Article in viewArticle view', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<ViewArticleChild article= {Article}/>);
    const actual = renderer.getRenderOutput();
    const expected =   <Col md={12} lg={12} sm={12} xs={12}>
        <h1>Article Title</h1>
        <hr></hr>
      </Col>;
    const expected2 = <Col md={8} lg={8} sm={8} xs={8}>
        <h3>Article Content</h3>
      </Col>;

    expect(actual).toIncludeJSX(expected);
    expect(actual).toIncludeJSX(expected2);

  });
});

// describe ('empty', () => {
//
//   it ('should work', () => {
//     expect(true).toEqual(true);
//   });
// });

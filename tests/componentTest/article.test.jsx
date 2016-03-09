import React from 'react';
import expect from 'expect';
import {Grid, Row, Col, Input, Panel, ButtonInput} from 'react-bootstrap';
import TestUtils from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import Form from './../../app/components/articles/Form.jsx';
import ListArticlesChild from './../../app/components/articles/ListArticlesChild.jsx';
import ViewArticleChild from './../../app/components/articles/ViewArticleChild.jsx';


  console.log('Running Front End Tests');

describe('CreateArticle', () => {

const Article = { title:'', content:'' };

  function _formSubmit()  {

  }

  function handleInputTitle()  {

  }

  function handleInputContent()  {

  }

  it('_formSubmit should be passed from CreateArticle to Form', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Form formSubmit ={_formSubmit}  Article= {Article}
      handleInputTitle ={handleInputTitle} handleInputContent ={handleInputContent}  />);
    const actual = renderer.getRenderOutput();
    const expected = <form onSubmit={() => {}}>
       <Input type="text" value='' label="Title" required

        onChange={() => {}} placeholder="Enter Article Title"/>
      <Input type="textarea" value='' label="Article Content"

         required onChange={() => {}} placeholder="Article Content: "/>
      <ButtonInput type="submit" value="Submit Button" bsStyle="primary"/>
    </form>;

    expect(actual).toIncludeJSX(expected);

  });
});

describe('EditArticle', () => {

  const Article = { title:'Article Title', content:'Article Content' };

  function handleInputTitle()  {

  }

  function handleInputContent()  {

  }

  function _formSubmit()  {

  }

  it('_formSubmit and Article should be passed from EditArticle to Form', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Form formSubmit ={_formSubmit} Article= {Article}
      handleInputTitle ={handleInputTitle} handleInputContent ={handleInputContent}  />);
    const actual = renderer.getRenderOutput();
    const expected = <form onSubmit={() => {}}>
       <Input type="text" value="Article Title" label="Title" required

        onChange={() => {}} placeholder="Enter Article Title"/>
      <Input type="textarea" value="Article Content" label="Article Content"

         required onChange={() => {}} placeholder="Article Content: "/>
      <ButtonInput type="submit" value="Submit Button" bsStyle="primary"/>
    </form>;

    expect(actual).toIncludeJSX(expected);
  });
});

describe('ListArticlesChild', () => {

  const Articles = [{ title:'Article Title1', content:'Article Content1' },
                       { title:'Article Title2', content:'Article Content2' }];

  it('should have Article Array in ListArticlesChild view', () => {
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

  const Article = { title:'Article Title', content:'Article Content', user:{_id:"as2445"} };

  it('should have Article in ViewArticleChild view', () => {
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

import React, { Component } from 'react'
import * as api from '../../api'
import {rotateImg} from '../../utils/compress-img.js'
import {Card,Row,Col,BackTop} from 'antd'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import draftToMarkdown from 'draftjs-to-markdown';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './richText.less'

const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

export default class RichTextExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty(),
      contentState:content
    }
  };
  onEditorStateChange = (editorState) => {
    console.log('onEditorStateChange:',editorState)
    this.setState({
      editorState,
    });
  };
  onContentStateChange =  (contentState) => {
    console.log('onContentStateChange:',contentState)
    this.setState({
      contentState,
    });
  };

  uploadImageCallBack = (file)=>{
    console.log('uploadImageCallBack:',file)
    // rotateImg(file).then(result => {
    //   console.log('rotateImg-result:',result)
    //   // api.upload(result.file).then(res => {
    //   //   console.log('api.upload-res:',res)
    //   // }).catch(err=>{
    //   //   console.log(err)
    //   // })
    // }).catch(error=>{
    //   console.log(error)
    // })
  }
  render() {
    const { editorState,contentState } = this.state;
    return (
      <div className="RichText">
        RichText
        <Card bordered={false} className='card-item'>
          <Editor
            editorState={editorState}
            onEditorStateChange={this.onEditorStateChange}
            onContentStateChange={this.onContentStateChange}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            localization={{ locale: 'zh'}}
            toolbar={{
              image: { uploadCallback: this.uploadImageCallBack, alt: { present: true, mandatory: true }},
            }}
          />
        </Card>
        <Row gutter={10}>
          <Col span={8}>
            <Card title='同步转换HTML' bordered={false} style={{minHeight:200}}>
              {editorState && draftToHtml(convertToRaw(editorState.getCurrentContent()))}
            </Card>
          </Col>
          <Col span={8}>
            <Card title='同步转换MarkDown' bordered={false} style={{minHeight:200}}>
              {editorState && draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}
            </Card>
          </Col>
          <Col span={8}>
            <Card title='同步转换JSON' bordered={false} style={{minHeight:200}}>
              {JSON.stringify(contentState, null, 4)}
            </Card>
          </Col>
        </Row>
      </div>
    );
  };

}
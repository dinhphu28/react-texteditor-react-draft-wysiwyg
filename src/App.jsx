import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, convertFromRaw, convertFromHTML, ContentState} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

function App() {

  

  const zzz = () => {
    // const sampleMarkup = '<p><strong>Bold text</strong>, <em>Italic text</em><br>aaaaasdfasdfsafasdfas ádfasdfsadf ấdfsadf &lt;abc&gt;  &lt;/abc&gt;<br><a href="http://www.facebook.com/" target="_self">Example link</a></p>';
    const sampleMarkup =
      '<b>Bold text</b>, <i>Italic text</i><br/ ><br />' +
      '<a href="http://www.facebook.com">Example link</a>';

    const blocksFromHTML = convertFromHTML(sampleMarkup);
    const state = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap,
    );

    return state;
  }

  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [editorState, setEditorState] = useState(EditorState.createWithContent(zzz()));

  const onEditorStateChange = (editorState_param) => {
    setEditorState(editorState_param)
    // console.log("VVVYYY: ", editorState.getCurrentContent())
    // console.log("YYYTTT: ", convertFromRaw(htmlToDraft("<h1>Mot con meo</h1>")))
  };

  return (
    <div className="App">
      {/* <Editor
        // editorState={editorState}
        // toolbarClassName="toolbarClassName"
        // wrapperClassName="wrapperClassName"
        // editorClassName="editorClassName"
        // onEditorStateChange={onEditorStateChange}
        
      /> */}

        <Editor
          // initialContentState={{"contentState"}}
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
        />
        <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
    </div>
  );
}

export default App;

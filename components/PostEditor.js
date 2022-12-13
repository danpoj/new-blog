// toast ui editor
import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/react-editor'

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js'

const PostEditor = ({ editorImageHook, forwardedRef }) => {
  return (
    <Editor
      ref={forwardedRef}
      initialValue='마크다운 문법을 지원합니다'
      previewStyle='tab'
      height='600px'
      initialEditType='markdown'
      plugins={[codeSyntaxHighlight]}
      useCommandShortcut={true}
      previewHighlight={false}
      autofocus={false}
      hideModeSwitch={true}
      hooks={editorImageHook}
    />
  )
}

export default PostEditor

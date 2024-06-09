'use client';

import 'prismjs/themes/prism.css';
import { MutableRefObject, useEffect, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { Editor } from '@toast-ui/react-editor';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import Prism from 'prismjs';
import { useTheme } from 'next-themes';

interface Props {
  editorRef: React.RefObject<Editor>;
  images?: MutableRefObject<any>; // 글수정 시 필요
  initialValue?: string; // 글수정 시 필요
}
const toolbarItems = [
  ['heading', 'bold', 'italic', 'strike'],
  ['hr'],
  ['ul', 'ol', 'task'],
  ['table', 'link'],
  ['image'],
  ['code', 'codeblock'],
  ['scrollSync']
];

export default function TuiEditor({ editorRef, images, initialValue }: Props) {
  const [preview, setPreview] = useState<string>(window.innerWidth > 1100 ? 'vertical' : 'tab');
  const { theme } = useTheme();
  const [title, setTitle] = useState('');
  const handleResize = () => {
    setPreview(window.innerWidth > 1100 ? 'vertical' : 'tab');
  };
  const handleChange = (e: { target: { value: any } }) => {
    const { value } = e.target;
    setTitle(value);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const showContent = async () => {
    const editorIns = editorRef?.current?.getInstance();
    // const HTML = editorIns.getMarkdown()
    const content = editorIns.getHTML();
    // console.log('html', HTML)
    console.log('title', title);
    console.log('content', content);

    const imageSize = 'style="max-width:20%"';
    const position = content.indexOf('src');

    const output = [content.slice(0, position), imageSize, content.slice(position)].join('');
    console.log('output', output);
    // 작성글 서버로 보내기
  };

  return (
    <section className={`editor-panel-editor${theme === 'dark' ? ' toastui-editor-dark' : ''}`}>
      <input type="text" placeholder="제목을 입력해주세요!" onChange={handleChange} />
      {editorRef && (
        <Editor
          ref={editorRef}
          initialValue={initialValue}
          initialEditType="wysiwyg"
          previewStyle={preview}
          hideModeSwitch={false} // 하단 바 숨김 여부
          height="calc(100vh - 380px)"
          // theme={editorTheme} // '' & 'dark'
          usageStatistics={false}
          toolbarItems={toolbarItems}
          useCommandShortcut
          plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
          //  hooks={{ addImageBlobHook: onUploadImage }} // firebase 이미지 업로드
        />
      )}

      <button type="button" onClick={showContent}>
        저장
      </button>
    </section>
  );
}

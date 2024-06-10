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

interface Props {
  editorRef: React.RefObject<Editor>;
  images?: MutableRefObject<any>; // 글수정 시 필요
  initialValue: string;
  theme?: string;
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

export default function TuiEditor({ editorRef, images, initialValue, theme }: Props) {
  const [preview, setPreview] = useState<string>(window.innerWidth > 1100 ? 'vertical' : 'tab');
  const handleResize = () => {
    setPreview(window.innerWidth > 1100 ? 'vertical' : 'tab');
  };

  useEffect(() => {
    document.querySelectorAll<HTMLElement>('.toastui-editor-defaultUI').forEach((element) => {
      element.style.border = 'none';
    });

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={`editor-panel-editor${theme === 'dark' ? ' toastui-editor-dark' : ''}`}>
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
    </section>
  );
}

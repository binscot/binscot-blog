'use client';

import { Editor as EditorType } from '@toast-ui/react-editor';
import { useRef, useState, SetStateAction, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { Input } from '@nextui-org/react';

const TuiEditor = dynamic(() => import('@/components/blog/tuiEditor'), {
  ssr: false
});

export function TuiEditorWrapper() {
  const ref = useRef<EditorType | null>(null);
  const [title, setTitle] = useState('');
  const { theme } = useTheme();

  const showContent = async () => {
    const editorIns = ref?.current?.getInstance();
    // const HTML = editorIns.getMarkdown()
    const content = editorIns.getHTML();
    console.log('title', title);
    console.log('content', content);

    const imageSize = 'style="max-width:20%"';
    const position = content.indexOf('src');

    const output = [content.slice(0, position), imageSize, content.slice(position)].join('');
    console.log('output', output);
    // 작성글 서버로 보내기
  };

  return (
    <section>
      <Input
        autoFocus
        // endContent={<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
        label="제목"
        placeholder="제목을 입력해주세요!"
        variant="bordered"
        value={title}
        onChange={(e: { target: { value: SetStateAction<string> } }) => setTitle(e.target.value)}
      />
      <TuiEditor editorRef={ref} initialValue="go" theme={theme} />
      <button type="button" onClick={showContent}>
        저장
      </button>
    </section>
  );
}

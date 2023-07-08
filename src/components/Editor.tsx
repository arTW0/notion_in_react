import React from "react";
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { lowlight } from 'lowlight'
import js from 'highlight.js/lib/languages/javascript'
import StarterKit from '@tiptap/starter-kit'
import { initialContent } from "./initialContent";
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode
} from 'react-icons/rx'
import 'highlight.js/styles/tokyo-night-dark.css'
import { BubbleButton } from "./BubbleButtom";



lowlight.registerLanguage('js', js)

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'outline-none'
      }
    }
  })

  return <>
    <EditorContent
      className="max-w[700px] mx-auto pt-16 prose prose-invert prose-violet"
      editor={editor}
    />
    {editor && (
      <BubbleMenu
        className="bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600"
        editor={editor}>
        <BubbleButton
          className="p-2 text-zinc-200 text-sm flex irems-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600">
          <RxFontBold className="w-4 h-4" />
        </BubbleButton>
        <BubbleButton
          className="p-2 text-zinc-200 text-sm flex irems-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600">
          <RxFontItalic className="w-4 h-4" />
        </BubbleButton>
        <BubbleButton
          className="p-2 text-zinc-200 text-sm flex irems-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600">
          <RxStrikethrough className="w-4 h-4" />
        </BubbleButton>
        <BubbleButton
          className="p-2 text-zinc-200 text-sm flex irems-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600">
          <RxCode className="w-4 h-4" />
        </BubbleButton>
      </BubbleMenu>
    )}
  </>
}
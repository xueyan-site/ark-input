import React from 'react'
import { Article, Segment } from 'ark-markdown'

const MARK1 = `
文本输入组件

\`\`\`
React.ForwardRefExoticComponent<
  InputProps<any> & React.RefAttributes<InputRef>
>
\`\`\`

## InputRef

\`\`\`
interface InputRef {
  /** 根节点 */
  rootNode: HTMLDivElement | null
  /** 输入框节点 */
  inputNode: HTMLInputElement | null
  /** 聚焦 */
  focus?: HTMLOrSVGElement['focus']
  /** 失焦 */
  blur?: HTMLOrSVGElement['blur']
}
\`\`\`

## InputProps

| 属性 | 名称 | 类型 | 说明 |
| - | - | - | - |
| className | 类名 | \`? string\` |  |
| style | 样式 | \`? React.CSSProperties\` |  |
| value | 已选值 | \`? T\` |  |
| disabled | 禁止修改 | \`? boolean\` |  |
| placeholder | 输入框提示 | \`? string\` |  |
| onChange | 改变已选值 | \`? InputOnChange<T>\` |  |
| onClear | 清除 | \`? InputOnClear\` |  |

## InputOnChange

输入事件触发的回调

\`\`\`
type InputOnChange<T> = (
  value: T,
  event: React.ChangeEvent<HTMLInputElement>
) => void
\`\`\`

## InputOnClear

清除事件触发的回调

\`\`\`
type InputOnClear = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) => void
\`\`\`
`

export default function Main() {
  return (
    <Article>
      <Segment>{MARK1}</Segment>
    </Article>
  )
}

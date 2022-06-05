import React, { useState } from 'react'
import { Article, Segment } from 'xueyan-react-markdown'
import { Playground } from 'xueyan-react-playground'
import { Input } from 'xueyan-react-input'

const MARK1 = `
文本输入组件库

## 示例
`

const CODE1 = `
import React, { useState } from 'react'
import { Input } from 'xueyan-react-input'

export default function Example() {
  const [value, setValue] = useState<string>()
  const [disabled, setDisabled] = useState<boolean>()
  return (
    <div>
      <div 
        onClick={() => setDisabled(!disabled)}
        style={{ marginBottom: '8px' }}
      >
        {disabled ? '解除禁用' : '禁用'}
      </div>
      <Input 
        value={value} 
        disabled={disabled}
        onChange={setValue} 
        onClear={() => setValue('')}
        style={{ width: '260px' }}
      />
    </div>
  )
}
`

export default function Main() {
  const scope = { React, useState, Input }
  return (
    <Article>
      <Segment>{MARK1}</Segment>
      <Playground scope={scope}>
        {CODE1}
      </Playground>
    </Article>
  )
}

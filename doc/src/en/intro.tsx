import React, { useState } from 'react'
import { Input } from 'xueyan-react-input'

export default function Main() {
  const [value, setValue] = useState<string>()
  return (
    <div>
      <Input value={value} onChange={setValue} allowClear={true}/>
      <Input value={value} onChange={setValue} allowClear={true} disabled/>
    </div>
  )
}

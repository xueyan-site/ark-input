import React, { useState } from 'react'
import { Input } from 'xueyan-react-input'
import { SwitchTheme } from 'xueyan-react-style'

export default function Main() {
  const [value, setValue] = useState<string>()
  return (
    <div 
      style={{ 
        background: 'var(--base)', 
        padding: '16px' 
      }}
    >
      <SwitchTheme 
        style={{ marginBottom: '16px' }}
      />
      <Input 
        value={value} 
        onChange={setValue} 
        onClear={() => setValue('')}
        style={{ marginBottom: '16px' }}
      />
      <Input 
        value={value} 
        disabled={true}
        onChange={setValue} 
        onClear={() => setValue('')}
      />
    </div>
  )
}

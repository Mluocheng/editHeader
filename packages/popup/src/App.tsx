import React, { useState } from 'react';
import './App.css';
import { Switch, Button } from 'antd';

function App() {
  const [open, setOpen] = useState(true);

  // 启用关闭
  function onChange(e: boolean | ((prevState: boolean) => boolean)) {
    setOpen(e);
    console.log(e)
  }

  // 管理 跳转管理页面
  function toAdminPage() {
    // @ts-ignore
    chrome.tabs.create({ url: '../packages/options/build/index.html' })
  }
  return (
    <div className="App">
      <div><Switch checked={open} onChange={onChange} /> 启用Editor Header</div>
      <div> <Button type="primary" block onClick={toAdminPage}>管理</Button></div>
    </div>
  );
}

export default App;

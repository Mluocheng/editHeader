import React from 'react';
import './App.css';
import { Tabs, TabsProps } from 'antd';
import Helps from './components/help';
import Rules from './components/rules';
function App() {
  const items: TabsProps['items'] = [
    {
      key: 'rules',
      label: `规则`,
      children: <Rules />,
    },
    {
      key: 'helps',
      label: `帮助`,
      children: <Helps />,
    },
  ];

  return (
    <div className="App">
      <Tabs defaultActiveKey="rules" items={items} />
    </div>
  );
}

export default App;

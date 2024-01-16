"use client"
import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import { Button, Input, Select, Space } from 'antd';

const { Search } = Input;

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
  },
];

export default function Home() {
  return (
    <Space direction="vertical" size="middle">
      <Space.Compact>
        <Select defaultValue="Zhejiang" options={options} />
        <Input defaultValue="Xihu District, Hangzhou" />
      </Space.Compact>
    </Space>
  )
}

"use client"
import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import { Button, Input, Select, Space } from 'antd';
import { BD, US } from 'country-flag-icons/react/3x2'

const { Option } = Select;

const countries = [
  {
    code: '+880',
    flag: <BD title="Bangladesh" />,
  },
  {
    code: '+1',
    flag: <US title="USA" />,
  },
];

export default function Home() {
  return (
    <Space direction="vertical" size="middle">
      <Space.Compact>
        <Select defaultValue={countries[0]} popupMatchSelectWidth={false} >
        {countries.map((country) => (
        <Option
          key={country.code}
          value={country.code}
          // Give label value for Select here
          label={country.code}
        >
          <span><span>{country.flag}</span> <span>{country.code}</span></span>
            
            
        </Option>
      ))}
    </Select>
        <Input />
      </Space.Compact>
    </Space>
  )
}

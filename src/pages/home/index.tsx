import Demo1 from '@/components/Demo1'
import { Button, Card, Col, Drawer, Radio, Row, Tooltip } from 'antd'
import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons'
const index: React.FC = () => {
  const navigate = useNavigate()

  const handleGo = () => {
    navigate('/login')
  }
  return (
      <div id="home" className="home">
      home Page
      <Button type='link' onClick={handleGo}>去login</Button>
      </div>
  )
}
export default index

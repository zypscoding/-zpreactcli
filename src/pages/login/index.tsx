import React, { Component, lazy, Suspense } from 'react'
import { Button } from 'antd'
import axios from 'axios'
import Demo2 from '@/components/Demo2'
import Demo1 from '@/components/Demo1'
import moment from 'moment'
import 'moment/locale/zh-cn'
import { useNavigate } from 'react-router-dom'

moment.locale('zh-cn')
const index = () => {
  const navigate = useNavigate()

  const handleGo = () => {
    navigate('/home')
  }

  return (
    <div id="login">
      {moment().subtract(6, 'days').calendar()}
      <Demo1 />
      login Page
      <Button type="primary" onClick={handleGo}>
        去home
      </Button>
      <img src={require('../../assets/imgs/logo192.png')}></img>
    </div>
  )
}
export default index

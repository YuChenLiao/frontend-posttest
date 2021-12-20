import React from "react"
import { Affix, Dropdown, Button, Menu } from "antd"
import 'antd/dist/antd.css'
import './rightAffix.css'

const RightAffix = () => {

  const menu = (
      <Menu>
        
      </Menu>
  )

  return (
    <Affix 
      style={{
        position: 'absolute',
        top: '65%',
        left: '94%'
      }}>
      <Dropdown 
        overlay={menu}
        placement="topCenter"
      >
        <div className="mStart">123</div>
      </Dropdown>
    </Affix>
  )
}

export default RightAffix
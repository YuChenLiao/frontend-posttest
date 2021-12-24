import React from "react"
import { 
  VerticalAlignTopOutlined, 
  GithubOutlined, 
  ConsoleSqlOutlined,
  AntDesignOutlined
} from '@ant-design/icons'
import { Tooltip } from "antd"
import 'antd/dist/antd.css'
import './rightAffix.css'

const RightAffix = () => {

  const toTop = () => {
    window.scrollTo(0,0)
  }

  return (
    <div className="mStart">
      <div onClick={()=>toTop()}>
        <Tooltip 
          title="回到顶部" 
          placement="left"
          color="#87d068"
        >
          <VerticalAlignTopOutlined />
        </Tooltip>
      </div>
      <div>
        <Tooltip 
          title="查看源码仓库" 
          placement="left"
          color="#2db7f5"
        >
          <a href="https://github.com/YuChenLiao/frontend-posttest">
            <GithubOutlined />
          </a>
        </Tooltip>
      </div>
      <div>
        <Tooltip 
          title="前往antd" 
          placement="left"
          color="#2db7f5"
        >
          <a href="https://ant.design/index-cn">
            <AntDesignOutlined />
          </a>
        </Tooltip>
      </div>
      <div>
        <Tooltip 
          title="查看API支持" 
          placement="left"
          color="#2db7f5"
        >
          <a href="https://docs.thecatapi.com/">
            <ConsoleSqlOutlined />
          </a>
        </Tooltip>
      </div>
    </div>
  )
}

export default RightAffix
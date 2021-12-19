import React, {useState, useEffect} from "react"
import axios from "axios"
import { Modal } from "antd"
import 'antd/dist/antd.css'
import './mainPage.css'

const MainPage = () => {
  const [imgsrc,setimgsrc] = useState([]);  // 保存图片信息
  let domWidth = 0; // 获取容器宽度
  let waterfallImgRight = 0;  // 计算每张图片的x轴位置
  const waterfallImgBottom = 10; // 等效每张图片的margin-bottom，目的是设置图片的下边距
  let waterfallDeviationHeight = new Array(5);// 记录每一列的高度


  useEffect(() => {
    loadImg()
  }, [])

  // 加载图片并计算图片位置
  const loadImg = async() => {
    const dtemp = document.getElementsByClassName('wContent');
    domWidth = (dtemp[0].clientWidth);  // 获取容器宽度
    const itemWidth = Math.floor(domWidth*0.18);  // 计算图片宽度
    waterfallImgRight = Math.floor(domWidth*0.02);  // 计算图片位置
    for ( let k = 0;k < waterfallDeviationHeight.length; k += 1) {  // 初始化每列高度
      waterfallDeviationHeight[k] = 0;
    }
    try {
      axios.defaults.headers.common['x-api-key'] = '40a43cad-bb75-475b-bf26-c6a60506a908'; // Replace this with your API Key
      const res = await axios.get(
        'https://api.thecatapi.com/v1/images/search', 
        { params: { limit: 20, size: 'full' } }
      );
      const temp = res.data;
      let url = [
        {
          id: '',
          url: '',
          width: 0,
          height: 0,
          realWidth: 0,
          realHeight: 0,
          top: 0,
          left: 0,
        }
      ]
      for(let i = 0;i < temp.length;i++) {
        const pic = {
          id: temp[i].id,
          url: temp[i].url,
          width: temp[i].width,
          height: temp[i].height,
          realWidth: temp[i].width,
          realHeight: temp[i].height,
          top: 0,
          left: 0,
        };
        // 计算缩放后的高度
        pic.height = Math.ceil((itemWidth/pic.width)*temp[i].height) + 30;
        // 获取高度最低列
        let minIndex = waterfallDeviationHeight.indexOf(Math.min(...waterfallDeviationHeight));
        // 获取图片顶部位置
        pic.top = waterfallDeviationHeight[minIndex];
        pic.left = minIndex*(waterfallImgRight + itemWidth);
        waterfallDeviationHeight[minIndex] += pic.height + waterfallImgBottom;
        url[i] = pic;
      }
      setimgsrc(url)
    } catch (err) {
      console.log(err);
      alert('加载出错');
    }
  };

  const clickItem = (item,index) => {
    Modal.info({
      title: '图片详情',
      closable: true,
      centered: true,
      maskClosable: true,
      content: (
        <div className="mask">
          <img src={item.url} alt={index}></img>
          <p>
            原图尺寸：
            宽{item.realWidth}px,
            高{item.realHeight}px
          </p>
          <div>
            图片链接：
            <a href={item.url} target="_blank">
              {item.url}
            </a>
          </div>
        </div>
      )
    })
  }

  // 瀑布流组件
  const Waterfall = (...src) => {
    const temp = src[0].src
    if(!temp[0]) {
      return null;
    }
    else
      return (
        temp.map((item,index)=>(
          <div 
            key={index}
            className='wImg'
            style={{
              height: item.height,
              top: item.top+'px',
              left: item.left+'px'
            }}
            onClick={()=>clickItem(item,index)}
          >
            <img src={item.url} alt={index} className='imgItem'></img>
          </div>
        )
      ))
  }

  return (
    <div className="mainContent">
      <div className="wContent">
        <Waterfall src={imgsrc}></Waterfall>
      </div>
      <div style={{
        height:'1px',
        marginTop:'-1px',
        clear: 'both',
        overflow:'hidden',
      }}
      ></div> 
    </div>
  );
}

export default MainPage;
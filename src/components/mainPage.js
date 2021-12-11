import React, {useState, useEffect} from "react";
import axios from "axios"
import './mainPage.css'

const MainPage = () => {
  const [imgsrc,setimgsrc] = useState([]);
  const [domWidth, setWidth] = useState(0);
  const waterfallImgRight = 10;
  const [waterfallImgCol, setCol] = useState(0);
  const waterfallImgBottom = 10;
  const [waterfallDeviationHeight, setDeviation] = useState(
    new Array(waterfallImgCol)
  );


  useEffect(() => {
    setWidth(document.body.clientWidth)
    loadImg()
  }, [])

  const loadImg = async() => {
    for ( let k = 0;k < waterfallDeviationHeight.length; k += 1) {
      setDeviation(waterfallDeviationHeight[k] = 0)
    }
    try {
      axios.defaults.headers.common['x-api-key'] = '40a43cad-bb75-475b-bf26-c6a60506a908'; // Replace this with your API Key
      const res = await axios.get(
        'https://api.thecatapi.com/v1/images/search', 
        { params: { limit: 40, size: 'full' } }
      );
      const temp = res.data;
      console.log(temp)
      for(let i = 0;i < temp.length;i++) {
        const pic = {
          id: temp[0].id,
          url: temp[0].url,
          width: temp[0].width,
          height: temp[0].height,
          top: 0,
          left: 0,
        };
        // 计算缩放后的高度
        pic.height = Math.ceil((160/pic.width)*temp[0].height) + 30;
        // 获取高度最低列
        let minIndex = waterfallDeviationHeight.indexOf(Math.min.apply(null, waterfallDeviationHeight));
        // 获取图片顶部位置
        pic.top = waterfallDeviationHeight[minIndex];
        pic.left = minIndex*(waterfallImgRight + 170);
        waterfallDeviationHeight[minIndex] += pic.height + waterfallImgBottom;
        console.log('珍爱生命，远离eslint');
        setimgsrc([...imgsrc,pic])
      }
      console.log(imgsrc)
      // console.log('url:', this.imgsrc[i].url);
      // console.log(this.imgsrc[i].left);
      // console.log(this.domWidth);
      // console.log(this.waterfallDeviationHeight.length)
      // console.log(minIndex);
      // console.log(this.waterfallImgCol);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mainContent">
      {
        imgsrc.map((item,index)=>{
          console.log(item)
          return (
            <div>内容{item.url}</div>
          )
        })
      }
    </div>
  );
}

export default MainPage;
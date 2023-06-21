/*
 * @Description: 
 * @Author:  
 * @Date: 2023-06-02 11:15:03
 * @LastEditTime: 2023-06-05 16:11:09
 * @LastEditors:  
 */
import * as React from 'react';
import { createElement } from 'react';
import { Button } from '@alifd/next';
import './index.scss';

export interface HoverPanelProps {
  /**
   * 类型
   */
  title?: string;
  discription?: string;
  link?: string;
  backgroundImage?: string ;
}

const HoverPanel: React.FC<HoverPanelProps> = (props) =>{
  const { title, discription, link, backgroundImage } = props;
  const handleClick = ()=> {
    if(link) {
      window.open(link);
    }
  }
  return (
    <div className='hover-panel'>
      <div className='title'>{title}</div>
      <div className='discription'>{discription}</div>
      <Button onClick={handleClick}>详情</Button>
      <div className='left-img' style={{"backgroundImage": `url(${backgroundImage})`}} />
    </div>
  );
};

HoverPanel.defaultProps = {
  title: "标题",
  discription: "描述",
  link: "https://lowcode-engine.cn/index",
  backgroundImage: "https://tianshu.alicdn.com/c2e0a8a2-9b6a-48b5-ba85-9b77ce16a89e.png"
};
export default HoverPanel;



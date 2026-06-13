import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      {/* <h1 className="about-us-heading">About Us</h1> */}
      <p className="about-us-description">歡迎來到 迷你電腦專家 ITX Expert，您的專業客製化電腦方案夥伴！</p>
      <p className="about-us-content">
        我們專注於打造高效能、小體積及高品質的客製化電腦系統，
        提供從入門遊戲主機到高階創作者工作站的完整解決方案。
      </p>
  
      {/* <p className="plant_logo_left"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}
      <p className="about-us-content">
         無論您是遊戲玩家、內容創作者、程式開發者、
        專業設計師或企業用戶，
        迷你電腦專家 ITX Expert 都能為您提供專業建議及客製化方案。
        </p>
      {/* <p className="plant_logo_right"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}

      <p className="about-us-content">
        我們的使命是以合理價格、專業技術及優質服務，
        幫助每位客戶打造理想中的電腦系統。
        </p>
    </div>
  );
}

export default AboutUs;

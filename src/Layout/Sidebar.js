import React from 'react';
import { Nav } from 'react-bootstrap';
import UserRankingCard from './UserRankingCard';
import { ThreeDots } from 'react-loader-spinner';

const Sidebar = ({ rankings }) => (
  
  <div style={{ width: '300px', height: '100vh', position: 'sticky', overflow: 'auto', background: '#f8f9fa',padding : '1%'}}>
    <div className="ranking_title">
      <span className="ranking_text">Ranking</span>
      <div className="trophy"></div>
    </div>
    
    {rankings.map((user, index) => {
      const imageNumber = Math.floor(Math.random() * 9) + 1; // Generate a random integer between 1 and 9
      return (
        <React.Fragment key={index}>
          <UserRankingCard
            name={user.username}
            score={user.point}
            profileImageUrl={`/image/${imageNumber}.png`}
          />
          {index !== rankings.length - 1 && <div style={{ marginBottom: '20px' }} />} {/* 마지막 카드가 아닌 경우에만 공백 추가 */}
        </React.Fragment>
      );
    })}
  </div>
);

export default Sidebar;

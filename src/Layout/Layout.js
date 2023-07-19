import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import axios from 'axios';
import { useState, useEffect} from 'react';
const Layout = ({children}) => {
  
  const [ranking, setRanking] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const id = window.id;
            const response = await axios.get('http://172.10.9.15:80/rank/');
            console.log(response.data);
            setRanking(response.data);
          } catch (error) { 
            console.error(error);
          }
        };
        fetchData();
      }, []);
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar rankings={ranking} />
        <div style={{ flex: 2}}>
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout;
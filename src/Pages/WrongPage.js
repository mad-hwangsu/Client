import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import Header from '../Layout/Header';

function WrongPage(props) {
    const { level } = useParams();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Add this

    //console.log(level);
    //const location = useLocation();
    //console.log(location?.state?.data)
    useEffect(() => {
        const fetchData = async () => {
          try {
            setIsLoading(true);
            const id = window.id
            const response = await axios.post('http://172.10.9.15:80/wrong/', { id });
            console.log(response.data);
            
            setData(response.data);
            setIsLoading(false);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
    return (
        isLoading ? (
            
            // If isLoading is true, show loading spinner
            <div style={{ 
             
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  height: '100vh' // 변경: 전체 뷰포트의 높이를 차지하도록 변경 
               
            }}>
              <ThreeDots color="#00BFFF" height={80} width={80}  />
            </div>
          ) : (
        <Layout>
            <div style={{ height: '100vh'}}>
        <Table striped bordered hover style={{ height: '10%' }}>
            <thead>
            <tr className="table-primary">
                <th>Problem ID</th>
                <th>Problem Title</th>
                <th>Level</th>
                <th>Rate</th>
            </tr>
            </thead>
            <tbody>
            {data.map(data => (
                <tr key={data.p_id}>
                    <td>
                    <Link to={`/level/${data.level}/${data.p_id}`} style={{color: '#db0000'}}>{data.p_id}</Link>
                    </td>
                    <td>{data.prob_name}</td>
                <td>level {data.level}</td>
                <td>{data.percent}</td>
                </tr>
            ))}
            </tbody>
        </Table>
        </div>
        </Layout>)
    );
}

export default WrongPage;
import React, { useEffect, useState } from 'react';
import Header from '../Layout/Header';
import { Table } from 'react-bootstrap';
import axios from 'axios';


const RankPage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const id = window.id;
            const response = await axios.get('http://172.10.9.15:80/rank/');
            console.log(response.data);
            setData(response.data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);

    return (
        <div>
            <Header/>
            <div style={{ height: '100vh'}}>
                <Table striped bordered hover style={{ height: '10%' }}>
                    <thead>
                    <tr className="table-primary">
                        <th>Name</th>
                        <th>Point</th>
                        <th>University</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(item => (
                        <tr  key={item.username}>
                            
                            <td className="table-cell-padding">{item.username}</td>
                            <td className="table-cell-padding">{item.point}점</td>
                            <td className="table-cell-padding">{item.university}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default RankPage;

import React, { PureComponent } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer,
  } from 'recharts';
import Search from './Search';

class Chart extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
  
    render() {
        const {search,factes} = this.props;
        const data = factes;
        console.log(data);
        return (
            <div style={{ width: '100%', height: 300 }} className="card-body bg-light mt-5 mb-5">
                NUMBER OF ARTICLE PUBLISHED FOR "{search}"
                <ResponsiveContainer>
                <AreaChart
                    data={data}
                    margin={{
                    top: 10, right: 30, left: 0, bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="term" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="count" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
                </ResponsiveContainer>
            </div>
        );
      }
  }


export default Chart;
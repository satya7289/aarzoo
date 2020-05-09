import React, { PureComponent } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer,
  } from 'recharts';
import Search from './Search';

class Chart extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
  
    render() {
        const {search,factes} = this.props;
        const data = [
            {
              year: '2011', article: 4000,
            },
            {
                year: '2012', article: 3000,
            },
            {
                year: '2013', article: 2000,
            },
            {
                year: '2014', article: 2780,
            },
            {
                year: '2015', article: 1890,
            },
            {
                year: '2016', article: 2390,
            },
            {
                year: '2017', article: 3490,
            },
            {
                year: '2018', article: 3490,
            },
            {
                year: '2019', article: 3490,
            },
            {
                year: '2020', article: 3490,
            },
          ];
        return (
            <div style={{ width: '100%', height: 300 }} className="card-body bg-light mt-2">
                NUMBER OF ARTICLE PUBLISHED FOR "{search}"
                <ResponsiveContainer>
                <AreaChart
                    data={data}
                    margin={{
                    top: 10, right: 30, left: 0, bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="article" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
                </ResponsiveContainer>
            </div>
        );
      }
  }


export default Chart;
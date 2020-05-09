import React from 'react';

const ShowResult = ({ data }) => {
    const datalist = data.map(d => {
        return (
            <tr key={Math.random*10}>
                <td>
                    {d.pub_date}
                </td>
                <td>
                    {d.headline.main}
                </td>
                <td>
                    {d.abstract}
                </td>
                <td>
                    {d.web_url}
                </td>
                <td>
                    {d.source}
                </td>
            </tr>
        )
    })
    return (
        <div className="card bg-light border-0">
            <div className="card-body">
                <h5> Articles </h5>
                <div className="table-sm mt-0">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Published Date</th>
                            <th>Headline</th>
                            <th>Summary</th>
                            <th>Url</th>
                            <th>Source</th>
                        </tr>
                        </thead>
                        <tbody>
                            {datalist}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ShowResult;
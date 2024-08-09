import React from 'react';

export default function DistractionsTable ({ data }) {
  const headers = data.length ? Object.keys(data[0]) : [];

  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map(header => (
            <th key={header} className="text-white/60">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody >
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map(header => (
              <td key={header}>
                {row[header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

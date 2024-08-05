import React from 'react';
import Table from './DistractionsTable'; 


export default function Distractions() {
  const downloadCSV = () => {
    const headers = data.length ? Object.keys(data[0]) : [];
    const csvRows = [];

    // Add headers
    csvRows.push(headers.join(','));

    // Add data rows
    for (const row of data) {
      const values = headers.map(header => {
        const escaped = ('' + row[header]).replace(/"/g, '\\"');
        return `"${escaped}"`;
      });
      csvRows.push(values.join(','));
    }

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center justify-center w-[1320px] h-[300px] bg-root-1 rounded-[20px]">
      
      <div className='flex flex-row w-[1320px] justify-between px-5 pt-5'>
      <h2 className="text-xl font-semibold text-white">Distractions Table</h2>
      <button
        className="mb-4 px-4 py-2 bg-slate-700 text-white  hover:bg-root-1 focus:outline-none  rounded-[20px]"
        onClick={downloadCSV}
      >
        Export to CSV
      </button>

      </div>    
      <Table data={data} />
    </div>
  );
}



const data = [
    { "S.no.": 1, "Type of Review": "Non-Actionable Review", "Platform": "Play Store", "Review Content": "Too many ads, very annoying." },
    { "S.no.": 2, "Type of Review": "Non-Actionable Review", "Platform": "App Store", "Review Content": "Too many ads, very annoying." },
    { "S.no.": 3, "Type of Review": "Actionable Review", "Platform": "Play Store", "Review Content": "The app crashes frequently." },
    { "S.no.": 4, "Type of Review": "Non-Actionable Review", "Platform": "App Store", "Review Content": "Fantastic customer support." },
    { "S.no.": 5, "Type of Review": "Non-Actionable Review", "Platform": "App Store", "Review Content": "Fantastic customer support." },
    { "S.no.": 6, "Type of Review": "Non-Actionable Review", "Platform": "App Store", "Review Content": "Fantastic customer support." },
    { "S.no.": 7, "Type of Review": "Non-Actionable Review", "Platform": "Play Store", "Review Content": "Excellent functionality and easy to use." },
    { "S.no.": 8, "Type of Review": "Actionable Review", "Platform": "Play Store", "Review Content": "Excellent functionality and easy to use." },
    { "S.no.": 9, "Type of Review": "Actionable Review", "Platform": "App Store", "Review Content": "I love the new features in the latest update." },
    { "S.no.": 10, "Type of Review": "Non-Actionable Review", "Platform": "Play Store", "Review Content": "I love the new features in the latest update." },
    { "S.no.": 11, "Type of Review": "Actionable Review", "Platform": "Play Store", "Review Content": "Excellent functionality and easy to use." },
    { "S.no.": 12, "Type of Review": "Actionable Review", "Platform": "Play Store", "Review Content": "Fantastic customer support." },
    { "S.no.": 13, "Type of Review": "Non-Actionable Review", "Platform": "App Store", "Review Content": "Too many ads, very annoying." },
    { "S.no.": 14, "Type of Review": "Non-Actionable Review", "Platform": "App Store", "Review Content": "Not what I expected, needs improvement." },
    { "S.no.": 15, "Type of Review": "Non-Actionable Review", "Platform": "Play Store", "Review Content": "Great app, very useful!" },
    { "S.no.": 16, "Type of Review": "Non-Actionable Review", "Platform": "Play Store", "Review Content": "I love the new features in the latest update." },
    { "S.no.": 17, "Type of Review": "Non-Actionable Review", "Platform": "Play Store", "Review Content": "Excellent functionality and easy to use." },
    { "S.no.": 18, "Type of Review": "Actionable Review", "Platform": "Play Store", "Review Content": "Poor user interface, hard to navigate." },
    { "S.no.": 19, "Type of Review": "Actionable Review", "Platform": "App Store", "Review Content": "I love the new features in the latest update." },
    { "S.no.": 20, "Type of Review": "Non-Actionable Review", "Platform": "App Store", "Review Content": "Excellent functionality and easy to use." },
    { "S.no.": 21, "Type of Review": "Actionable Review", "Platform": "Play Store", "Review Content": "Too many ads, very annoying." },
    { "S.no.": 22, "Type of Review": "Non-Actionable Review", "Platform": "Play Store", "Review Content": "Not what I expected, needs improvement." },
    { "S.no.": 23, "Type of Review": "Actionable Review", "Platform": "Play Store", "Review Content": "Excellent functionality and easy to use." },
    { "S.no.": 24, "Type of Review": "Actionable Review", "Platform": "App Store", "Review Content": "I love the new features in the latest update." },
    { "S.no.": 25, "Type of Review": "Actionable Review", "Platform": "App Store", "Review Content": "The app crashes frequently." },
    { "S.no.": 26, "Type of Review": "Non-Actionable Review", "Platform": "Play Store", "Review Content": "Great app, very useful!" },
    { "S.no.": 27, "Type of Review": "Non-Actionable Review", "Platform": "App Store", "Review Content": "Too many ads, very annoying." },
    { "S.no.": 28, "Type of Review": "Non-Actionable Review", "Platform": "Play Store", "Review Content": "Not what I expected, needs improvement." },
    { "S.no.": 29, "Type of Review": "Non-Actionable Review", "Platform": "Play Store", "Review Content": "Poor user interface, hard to navigate." },
    { "S.no.": 30, "Type of Review": "Actionable Review", "Platform": "Play Store", "Review Content": "The app crashes frequently." },
    { "S.no.": 31, "Type of Review": "Actionable Review", "Platform": "App Store", "Review Content": "I love the new features in the latest update." },
    { "S.no.": 32, "Type of Review": "Actionable Review", "Platform": "App Store", "Review Content": "Fantastic customer support." },
    { "S.no.": 33, "Type of Review": "Non-Actionable Review", "Platform": "Play Store", "Review Content": "Poor user interface, hard to navigate." },
    { "S.no.": 34, "Type of Review": "Non-Actionable Review", "Platform": "App Store", "Review Content": "I love the new features in the latest update." },
    { "S.no.": 35, "Type of Review": "Non-Actionable Review", "Platform": "App Store", "Review Content": "Great app, very useful!" },
    { "S.no.": 36, "Type of Review": "Actionable Review", "Platform": "Play Store", "Review Content": "Not what I expected, needs improvement." },
    { "S.no.": 37, "Type of Review": "Actionable Review", "Platform": "App Store", "Review Content": "I love the new features in the latest update." },
    { "S.no.": 38, "Type of Review": "Actionable Review", "Platform": "Play Store", "Review Content": "The app crashes frequently." },
    { "S.no.": 39, "Type of Review": "Actionable Review", "Platform": "Play Store", "Review Content": "The app crashes frequently." },
    { "S.no.": 40, "Type of Review": "Non-Actionable Review", "Platform": "App Store", "Review Content": "Excellent functionality and easy to use." },
    { "S.no.": 41, "Type of Review": "Non-Actionable Review", "Platform": "Play Store", "Review Content": "The app crashes frequently." },
    { "S.no.": 42, "Type of Review": "Actionable Review", "Platform": "App Store", "Review Content": "Too many ads, very annoying." },
    { "S.no.": 43, "Type of Review": "Actionable Review", "Platform": "Play Store", "Review Content": "I love the new features in the latest update." },
    { "S.no.": 44, "Type of Review": "Actionable Review", "Platform": "Play Store", "Review Content": "Great app, very useful!" },
    { "S.no.": 45, "Type of Review": "Non-Actionable Review", "Platform": "Play Store", "Review Content": "Not what I expected, needs improvement." },
    { "S.no.": 46, "Type of Review": "Non-Actionable Review", "Platform": "Play Store", "Review Content": "Fantastic customer support." },
    { "S.no.": 47, "Type of Review": "Non-Actionable Review", "Platform": "App Store", "Review Content": "Poor user interface, hard to navigate." },
    { "S.no.": 48, "Type of Review": "Non-Actionable Review", "Platform": "App Store", "Review Content": "Great app, very useful!" },
    { "S.no.": 49, "Type of Review": "Actionable Review", "Platform": "App Store", "Review Content": "I love the new features in the latest update." },
    { "S.no.": 50, "Type of Review": "Non-Actionable Review", "Platform": "Play Store", "Review Content": "Too many ads, very annoying." },
    { "S.no.": 51, "Type of Review": "Non-Actionable Review", "Platform": "Play Store", "Review Content": "Excellent functionality and easy to use." },
    { "S.no.": 52, "Type of Review": "Non-Actionable Review", "Platform": "Play Store", "Review Content": "Fantastic customer support." },
    { "S.no.": 53, "Type of Review": "Actionable Review", "Platform": "Play Store", "Review Content": "Too many ads, very annoying." },
    { "S.no.": 54, "Type of Review": "Non-Actionable Review", "Platform": "Play Store", "Review Content": "Not what I expected, needs improvement." },
    { "S.no.": 55, "Type of Review": "Non-Actionable Review", "Platform": "App Store", "Review Content": "Too many ads, very annoying." },
    { "S.no.": 56, "Type of Review": "Non-Actionable Review", "Platform": "Play Store", "Review Content": "Great app, very useful!" },
    { "S.no.": 57, "Type of Review": "Actionable Review", "Platform": "App Store", "Review Content": "The app crashes frequently." },
    { "S.no.": 58, "Type of Review": "Non-Actionable Review", "Platform": "App Store", "Review Content": "Poor user interface, hard to navigate." },
    { "S.no.": 59, "Type of Review": "Non-Actionable Review", "Platform": "Play Store", "Review Content": "Poor user interface, hard to navigate." },
    { "S.no.": 60, "Type of Review": "Non-Actionable Review", "Platform": "Play Store", "Review Content": "I love the new features in the latest update." },
    { "S.no.": 61, "Type of Review": "Non-Actionable Review", "Platform": "Play Store", "Review Content": "Too many ads, very annoying." },
    { "S.no.": 62, "Type of Review": "Actionable Review", "Platform": "App Store", "Review Content": "Not what I expected, needs improvement." },
    { "S.no.": 63, "Type of Review": "Actionable Review", "Platform": "Play Store", "Review Content": "Great app, very useful!" },
    { "S.no.": 64, "Type of Review": "Non-Actionable Review", "Platform": "Play Store", "Review Content": "Not what I expected, needs improvement." },
    { "S.no.": 65, "Type of Review": "Actionable Review", "Platform": "App Store", "Review Content": "Too many ads, very annoying." },
    { "S.no.": 66, "Type of Review": "Non-Actionable Review", "Platform": "App Store", "Review Content": "Fantastic customer support." },
    { "S.no.": 67, "Type of Review": "Non-Actionable Review", "Platform": "App Store", "Review Content": "Fantastic customer support." },
    { "S.no.": 68, "Type of Review": "Actionable Review", "Platform": "Play Store", "Review Content": "I love the new features in the latest update." },
    { "S.no.": 69, "Type of Review": "Actionable Review", "Platform": "App Store", "Review Content": "Great app, very useful!" },
    { "S.no.": 70, "Type of Review": "Actionable Review", "Platform": "Play Store", "Review Content": "The app crashes frequently." },
];

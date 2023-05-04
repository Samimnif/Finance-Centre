import React, { useState } from 'react';
import LoanCalculator from './LoanCalculator';
import MortgageCalculator from './MortgageCalculator';
import InflationCalculator from './InflationCalculator';
import InterestCalculator from './InterestCalculator';
import 'bootstrap/dist/css/bootstrap.min.css';

function FinancialHub() {
    const [selectedTool, setSelectedTool] = useState(null);

    // Define an array of tool objects with name and content properties
    const tools = [
        { name: 'Loan Calculator', content: <LoanCalculator /> },
        { name: 'Mortgage Calculator', content: <MortgageCalculator /> },
        { name: 'Interest Calculator', content: <InterestCalculator /> },
        { name: 'Inflation Calculator', content: <InflationCalculator /> },
        { name: 'Tool 5', content: 'Insert tool 5 here' },
        { name: 'Tool 6', content: 'Insert tool 6 here' },
        { name: 'Tool 7', content: 'Insert tool 7 here' },
        { name: 'Tool 8', content: 'Insert tool 8 here' },
        { name: 'Tool 9', content: 'Insert tool 9 here' },
    ];

    // Calculate the number of rows and columns based on the number of tools
    const numCols = 3;
    const numRows = Math.ceil(tools.length / numCols);

    // Generate the table rows and columns using nested loops
    const tableRows = [];
    for (let i = 0; i < numRows; i++) {
        const tableCells = [];
        for (let j = 0; j < numCols; j++) {
            const toolIndex = i * numCols + j;
            if (toolIndex < tools.length) {
                tableCells.push(
                    <td key={j}>
                        <button onClick={() => setSelectedTool(tools[toolIndex])} className="btn btn-outline-primary">
                            {tools[toolIndex].name}
                        </button>
                    </td>
                );
            } else {
                tableCells.push(<td key={j}></td>);
            }
        }
        tableRows.push(<tr key={i}>{tableCells}</tr>);
    }

    return (
        <div>
            <div class="row justify-content-center">
                <div class="col-md-5">
                    <table>
                        <tbody>
                            {tableRows}
                        </tbody>
                    </table>
                </div>
            </div>
            <br />
            <div class="row justify-content-center">
                <div class="col-md-5">
                    {selectedTool && (
                        <div>
                            {selectedTool.content}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FinancialHub;

import React from 'react';
import { useRef } from 'react';
import { jsPDF } from 'jspdf';
import Invo from '../Invoice/invo';

const Invoice = () => {

    const pdfRef = useRef(null);

    const handleDownload = () => {
        const content = pdfRef.current;

        const doc = new jsPDF();
        doc.html(content, {
            callback: function (doc) {
                doc.save('sample.pdf');
            },
            html2canvas: { scale: 0.3 }, // change the scale to whatever number you need
            width: 700, // <- here
            windowWidth: 700 // <- here
        });
    };




    return (
        <div>
            <header ref={pdfRef}>
                <Invo />
            </header>
            <footer>
                <button className="mx-auto" onClick={handleDownload}>Download</button>
            </footer>
        </div>

    );
};

export default Invoice;
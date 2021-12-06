import React from "react";
import figure1 from '../../../images/figure1.png';
import withLayout from "../../app/navigation/withLayout";

const InformationResource = ({ title, subtitle, paragraphs }) => {

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>How can college students reduce the homeless issue around the city of Seattle?</h1>
            <h2 style={{ textAlign: 'center' }}>The Problem</h2>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ flex: 2 }}>
                    {
                        paragraphs.map(paragraph => <p> {paragraph} </p>)
                    }
                </div>
                <img src={figure1} />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: 200, height: 200, backgroundColor: 'red', marginTop: 10, marginBottom: 10 }} />
                    <div style={{ width: 200, height: 200, backgroundColor: 'red', marginTop: 10, marginBottom: 10 }} />
                    <div style={{ width: 200, height: 200, backgroundColor: 'red', marginTop: 10, marginBottom: 10 }} />
                    <div style={{ width: 200, height: 200, backgroundColor: 'red', marginTop: 10, marginBottom: 10 }} />
                </div>
            </div>
        </div>
    );
};

export default withLayout(InformationResource);
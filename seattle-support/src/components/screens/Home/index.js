import React from "react";
import withLayout from "../../app/navigation/withLayout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col} from 'react-bootstrap'
import RESOURCES from "./resources.json"
import "./styles.css"

let resourceItems = RESOURCES.resources

const Home = () => {
    return (
        <div>
            <div>
                <h1>Seattle Support</h1>
                <p>Join us in helping to combat homelessness. Use this as a resource to create
                    informational resource pamphlets, find locations for different donation
                    possibilities and to get general information on homelessness and how to help.</p>
                <p>Below are some great starting resources, go check them out!</p>
            </div>
            <Row xs={1} md={2} lg={4}>
                <Col className="d-flex p-2">
                    <Card className="myCard" onClick= { () => {window.open(resourceItems[0].url)}}>
                        <img src={resourceItems[0].imgPath} alt={resourceItems[0].imgAlt}/>
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-center">{resourceItems[0].title}</Card.Title>
                            <Card.Text className="d-flex justify-content-center">{resourceItems[0].resourceDesc}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="d-flex p-2">
                    <Card className="myCard" onClick= { () => {window.open(resourceItems[1].url)}}>
                        <img src={resourceItems[1].imgPath} alt={resourceItems[1].imgAlt}/>
                        <Card.Body>
                            <Card.Title>{resourceItems[1].title}</Card.Title>
                            <Card.Text>{resourceItems[1].resourceDesc}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="d-flex p-2">
                    <Card className="myCard" onClick= { () => {window.open(resourceItems[2].url)}}>
                        <img src={resourceItems[2].imgPath} alt={resourceItems[2].imgAlt}/>
                        <Card.Body>
                            <Card.Title>{resourceItems[2].title}</Card.Title>
                            <Card.Text>{resourceItems[2].resourceDesc}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="d-flex p-2">
                    <Card className="myCard" onClick= { () => {window.open(resourceItems[3].url)}}>
                        <img src={resourceItems[3].imgPath} alt={resourceItems[3].imgAlt}/>
                        <Card.Body>
                            <Card.Title>{resourceItems[3].title}</Card.Title>
                            <Card.Text>{resourceItems[3].resourceDesc}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default withLayout(Home);
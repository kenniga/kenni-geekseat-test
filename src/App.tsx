import React from 'react';
import './App.css';
import Button from './components/Button';
import { Tab, Tabs } from 'react-bootstrap';
import Divider from './components/Divider';
import {
    BsArrowLeftShort,
    BsArrowRightShort,
    BsAwardFill,
    BsCalendarFill,
    BsFillBookmarkHeartFill
} from 'react-icons/bs';

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="wrapper">
                    <h1>Geekseat UI/UX Developer Test</h1>
                    <div className="tabs">
                        <Tabs defaultActiveKey="buttons" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="buttons" title="Buttons">
                                <div className="space">
                                    <Button variant="primary">Primary</Button>
                                    <Button variant="secondary">Secondary</Button>{' '}
                                </div>
                            </Tab>
                            <Tab eventKey="divider" title="Dividers">
                                <div className="divider-item">
                                    <Divider>Label</Divider>
                                </div>
                                <div className="divider-item">
                                    <Divider alignment="start">Start</Divider>
                                    <Divider alignment="center">Center</Divider>
                                    <Divider alignment="end">End</Divider>
                                </div>
                                <div className="divider-item">
                                    <Divider lineStyle="solid">Solid</Divider>
                                    <Divider lineStyle="dashed">Dashed</Divider>
                                    <Divider lineStyle="dotted">Dotted</Divider>
                                </div>
                                <div className="divider-item">
                                    <Divider lineWeight="light">Light</Divider>
                                    <Divider lineWeight="regular">Regular</Divider>
                                    <Divider lineWeight="heavy">Heavy</Divider>
                                </div>
                                <div className="divider-item">
                                    <Divider>Text Content</Divider>
                                    <Divider>
                                        <BsFillBookmarkHeartFill color="#e729ad" height={15} />
                                    </Divider>
                                    <Divider>
                                        <BsArrowLeftShort color="#3a6fc4" />
                                        <BsAwardFill color="#3a6fc4" />
                                        <BsArrowRightShort color="#3a6fc4" />
                                    </Divider>
                                    <Divider lineStyle="dashed" lineWeight="regular" alignment="start">
                                        <BsCalendarFill height={15} />
                                    </Divider>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

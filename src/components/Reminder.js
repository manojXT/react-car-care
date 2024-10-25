import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Reminder.css';
import Access from './Access';


const Reminder = () => {
    const reminderData = [
        { title: "Service Reminder", configured: "0 Notifications Configured" },
        { title: "Pollution Check", configured: "0 Notifications Configured" },
        { title: "License Expiry", configured: "0 Notifications Configured" },
        { title: "Control Technique", configured: "0 Notifications Configured" }
    ];

    return (
        <Container fluid className="mt-4">
          <Access />
            <Row>
                <Col>
                    <h4>Configure Notification Schedule For Different Types Of Reminders</h4>
                    <p className="text-muted">
                        NOTE: You may configure up to a maximum of 5 notifications for each type of reminder.
                    </p>
                </Col>
            </Row>

            {reminderData.map((reminder, index) => (
                <Card className="mb-3" key={index}>
                    <Card.Body className="d-flex justify-content-between align-items-center">
                        <div>
                            <h5>{reminder.title}</h5>
                            <p className="text-muted">{reminder.configured}</p>
                        </div>
                        <Button variant="outline-primary">
                            Add Notification <i className="fas fa-plus-circle"></i>
                        </Button>
                    </Card.Body>
                </Card>
            ))}
            <Card className="reminder-card mb-3">
                <Card.Body className="d-flex justify-content-between align-items-center">
                    <div>
                        <h5 className="reminder-title text-primary">Insurance Expiry Reminder</h5>
                        <p className="text-muted">0 Notifications Configured</p>
                    </div>
                    <Button variant="outline-primary" className="add-notification-button">
                        Add Notification <i className="fas fa-plus-circle"></i>
                    </Button>
                </Card.Body>
            </Card>
            <Row>
                <Col className="text-end">
                    <Button variant="primary">Next</Button>
                </Col>
            </Row>

        </Container>

    );
};

export default Reminder;

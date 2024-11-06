import React, { useState } from 'react';
import { Collapse, Button, Form, FormControl } from 'react-bootstrap';
import './Terms and condition.css';
import Access from './Access';


const Termsandcondition = () => {
  const [termsEnabled, setTermsEnabled] = useState(false);
  const [openSections, setOpenSections] = useState({
    workOrder: false,
    estimate: false,
    proformaInvoice: false,
    customerInvoice: false,
    insuranceInvoice: false,
  });

  const toggleSection = (section) => {
    setOpenSections({
      ...openSections,
      [section]: !openSections[section],
    });
  };

  return (
    <div className="Terms and condition">
      <Access />
      <div className="terms-and-conditions">
        <div className="toggle-container">
          <span>Terms & Conditions</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={termsEnabled}
              onChange={() => setTermsEnabled(!termsEnabled)}
            />
            <span className="slider round"></span>
          </label>
        </div>

        {termsEnabled && (
          <Form.Group controlId="termsTextArea">
            <Form.Label>Edit Terms & Conditions</Form.Label>
            <FormControl as="textarea" rows={5} placeholder="Enter your terms and conditions here" />
          </Form.Group>
        )}
      </div>

      {/* Collapsible sections */}
      <div className="sections">
        <div className="section">
          <Button onClick={() => toggleSection('workOrder')} aria-controls="workOrder" aria-expanded={openSections.workOrder}>
            Work Order
          </Button>
          <Collapse in={openSections.workOrder}>
            <div id="workOrder">
              <p>Work order details go here.</p>
            </div>
          </Collapse>
        </div>

        <div className="section">
          <Button onClick={() => toggleSection('estimate')} aria-controls="estimate" aria-expanded={openSections.estimate}>
            Estimate
          </Button>
          <Collapse in={openSections.estimate}>
            <div id="estimate">
              <p>Estimate details go here.</p>
            </div>
          </Collapse>
        </div>

        <div className="section">
          <Button onClick={() => toggleSection('proformaInvoice')} aria-controls="proformaInvoice" aria-expanded={openSections.proformaInvoice}>
            Proforma Invoice
          </Button>
          <Collapse in={openSections.proformaInvoice}>
            <div id="proformaInvoice">
              <p>Proforma invoice details go here.</p>
            </div>
          </Collapse>
        </div>

        <div className="section">
          <Button onClick={() => toggleSection('customerInvoice')} aria-controls="customerInvoice" aria-expanded={openSections.customerInvoice}>
            Customer Invoice
          </Button>
          <Collapse in={openSections.customerInvoice}>
            <div id="customerInvoice">
              <p>Customer invoice details go here.</p>
            </div>
          </Collapse>
        </div>

        <div className="section">
          <Button onClick={() => toggleSection('insuranceInvoice')} aria-controls="insuranceInvoice" aria-expanded={openSections.insuranceInvoice}>
            Insurance Invoice
          </Button>
          <Collapse in={openSections.insuranceInvoice}>
            <div id="insuranceInvoice">
              <p>Insurance invoice details go here.</p>
            </div>
          </Collapse>
         
        </div>
        <div><button className="next-button">Next</button></div>
      </div>
    </div>
  );
};

export default Termsandcondition;
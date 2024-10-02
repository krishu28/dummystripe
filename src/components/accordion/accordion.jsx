import React from 'react';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import './accordion.css'; // Import your CSS file

export default function Accord() {
  return (
    <MDBAccordion flush initialActive={1}>
      <MDBAccordionItem 
        collapseId={1} 
        headerTitle={<span className="accordion-header">What are merchant services?</span>}
      >
        Merchant services are financial services that enable businesses to accept and process payments through various methods, primarily credit and debit cards. These services often include payment gateways, point of sale (POS) systems, online payment processing, and other related financial services.
      </MDBAccordionItem>
      <MDBAccordionItem 
        collapseId={2} 
        headerTitle={<span className="accordion-header">Why do businesses need merchant services?</span>}
      >
        Merchant services allow businesses to offer flexible payment options to their customers, which can enhance customer satisfaction and potentially increase sales. They also provide security and efficiency in handling transactions, reducing the risk of fraud and errors.
      </MDBAccordionItem>
      <MDBAccordionItem 
        collapseId={3} 
        headerTitle={<span className="accordion-header">How do merchant services work?</span>}
      >
        When a customer makes a purchase using a credit or debit card, the merchant services provider processes the payment by securely transmitting the transaction information between the merchant, the customer’s bank, and the merchant’s bank. Once the transaction is approved, the funds are transferred to the merchant’s account.
      </MDBAccordionItem>
      <MDBAccordionItem 
        collapseId={4} 
        headerTitle={<span className="accordion-header">What is a payment gateway?</span>}
      >
        A payment gateway is a technology used by merchants to accept debit and credit card purchases from customers. It encrypts sensitive information, such as card details, to ensure that the information is securely passed from the customer to the merchant and from the merchant to the payment processor.
      </MDBAccordionItem>
      <MDBAccordionItem 
        collapseId={5} 
        headerTitle={<span className="accordion-header">What types of payment methods can be processed through merchant services?</span>}
      >
        Merchant services can process a variety of payment methods including:
        <ul style={{listStyleType:"disc"}}>
          <li>Credit and debit cards (Visa, MasterCard, American Express, Discover)</li>
          <li>Mobile payments (Apple Pay, Google Wallet)</li>
          <li>ACH (Automated Clearing House) transactions</li>
          <li>E-checks</li>
          <li>Contactless payments (NFC)</li>
        </ul>
      </MDBAccordionItem>
    </MDBAccordion>
  );
}

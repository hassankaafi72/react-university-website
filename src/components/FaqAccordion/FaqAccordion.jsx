import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <p className='text-center mb-5'>Find answers to some of the most common questions about Jamhuuriya University, our programs, admissions, fees, and campus facilities below.</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>What programs does Jamhuuriya University offer?</Accordion.Header>
                    <Accordion.Body>
                       We offer accredited programs in Medicine, Engineering, Computer Science, Business, Agriculture, and Education
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>What is the admission process?</Accordion.Header>
                    <Accordion.Body>
                        To apply for admission, complete the online application form on our website, submit the required academic documents, and attend an entrance interview. Successful applicants will be notified via email with further instructions regarding enrollment and orientation.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>What are the tuition fees and payment options?</Accordion.Header>
                    <Accordion.Body>
                        Tuition fees vary by program. Please visit our Tuition & Fees page or contact the admissions office for the most up-to-date information and available payment options.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>What facilities are available on campus?</Accordion.Header>
                    <Accordion.Body>
                        Our campus offers a wide range of facilities to support student life and learning, including modern classrooms, laboratories, libraries, study areas, and recreational facilities. We also provide access to counseling services, academic support, and extracurricular activities to enhance the overall student experience.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;
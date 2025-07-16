import React, { useState, useEffect } from 'react';
import './faculties.css';
import { Card } from 'react-bootstrap';
import ArtCourseImg from '../../utils/images/art-course.jpg';
import BusinessCourseImg from '../../utils/images/business-course.jpg';
import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpg';
import EducationCourseImg from '../../utils/images/education-course.jpg';
import HealthcareCourseImg from '../../utils/images/healthcare-course.jpg';
import LawCourseImg from '../../utils/images/law-course.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const initialCourses = [
    {
        id: 1,
        img: [BusinessCourseImg],
        title: 'Faculty of Economics & Management',
        description: 'Faculty of Economics & Management. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
    {
        id: 2,
        img: [ArtCourseImg],
        title: 'Faculty of Agricultural Sciences',
        description: 'Combines theory and fieldwork to educate students in animal health, crop production, and sustainable agriculture to support national food security and development.'
    },
    {
        id: 3,
        img: [ComputerScienceCourseImg],
        title: 'Faculty of Computer & IT',
        description: 'Offers practical and career-focused programs in computer science, networking, cybersecurity, and multimedia—preparing students for modern digital careers.'
    },
    {
        id: 4,
        img: [EducationCourseImg],
        title: 'Faculty of Engineering',
        description: 'Provides hands-on training in civil, electrical, and biomedical engineering, equipping students with the technical and problem-solving skills needed in real-world engineering fields.'
    },
    {
        id: 5,
        img: [HealthcareCourseImg],
        title: 'Faculty of Medicine &Healthcare',
        description: 'Delivers quality education in medicine, nursing, medical laboratory science, public health, and pharmacology—training future healthcare professionals to serve communities.'
    },
    {
        id: 6,
        img: [LawCourseImg],
        title: 'Faculty of Law',
        description: 'Offers a comprehensive legal education, preparing students for successful careers in various fields of law and advocacy.'
    }
];

function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setCourses(initialCourses);
    }, []);

    return (
        <div className='courses-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>Our faculties</h1>
                    <p className='text-center w-75 mb-3'>
                        Jamhuriya University offers six diverse faculties that provide quality, accredited programs in health, engineering, IT, business, education, and agriculture—preparing students for real-world success.
                    </p>
                    <p className='text-center w-75 text-danger fs-5'>
                        Total Faculties Available: {courses.length}
                    </p>
                </div>
            </header>

            <div className='container py-5'>
                <div className='row g-4'>
                    {courses.map((course) => (
                        <div key={course.id} className='col-lg-6'>
                            <Card className='text-white shadow scale-hover-effect'>
                                <Card.Img src={course.img} />
                                <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                    <Card.Title className='fs-1 text-danger'>{course.title}</Card.Title>
                                    <Card.Text className='text-center'>{course.description}</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            <div className='bg-dark text-light py-5'>
                <FaqAccordion />
            </div>
        </div>
    );
}

export default Courses;

/* eslint-disable react/prop-types */
import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;

    return (
        <Card className="mb-3">
            <Card.Header className='d-flex align-items-center'>
                <Image src={author?.img} style={{ width: '40px' }} roundedCircle />
                <div className='ms-2 flex-grow-1'>
                    <p className='my-0 fw-bold' style={{ fontSize: '14px' }}>{author?.name}</p>
                    <p className='my-0' style={{ fontSize: '12px' }}>{moment(author?.published_date).format('yyyy-MM-D')}</p>
                </div>
                <div>
                    <Link><FaRegBookmark className='text-secondary me-2 fs-5' /></Link>
                    <Link><FaShareAlt className='text-secondary fs-5' /></Link>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>{
                    details.length < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)}... <Link to={`/news/${_id}`} className='text-decoration-none text-danger text-primary'>Read More</Link></>
                }</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between" style={{ fontSize: '13px' }}>
                <div>
                    <Rating
                        className='text-danger text-primary text-opacity-75'
                        placeholderRating={rating.number}
                        emptySymbol={<FaRegStar/>}
                        placeholderSymbol={<FaStar />}
                        fullSymbol={<FaStar/>}
                        readonly
                    />
                    <span> {rating.number}</span>
                </div>
                <div>
                    <FaEye />
                    <span> {total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;
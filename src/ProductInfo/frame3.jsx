import React, { useState, useEffect, useRef } from "react";
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css'; // Stil dosyasını içe aktarın
import "./frame3.css";

function Frame3({ product }) {
    const [comments, setComments] = useState([]);
    const [visibleComments, setVisibleComments] = useState(3);
    const [showScroll, setShowScroll] = useState(false); // Scrool gösterimi durumunu izleyin
    const commentsContainerRef = useRef(null);

    useEffect(() => {
        async function fetchComments() {
            try {
                const response = await fetch("http://localhost:3000/comment");
                if (!response.ok) {
                    throw new Error("Failed to fetch comments");
                }
                const commentsData = await response.json();
                setComments(commentsData);
            } catch (error) {
                console.error("Error fetching comments:", error);
            }
        }

        fetchComments(); // Başlangıçta API isteğini yeniden gönder
    }, []); // Boş bağımlılık dizisi, sadece bir kez çalışmasını sağlar

    const handleViewMore = () => {
        setVisibleComments(prevVisibleComments => prevVisibleComments + 3);
        setShowScroll(true); // Butona tıklandığında scroll gösterimi true yapın
    };

    return (
        <div className="frame-3">
            <h2 className="title-rev">Reviews</h2>
            <div className="rateandrev">
                <div className="rate">
                    <p className="rate-score">4.1</p>
                    <p className="rate-message">of 125 reviews</p>
                    <Rate defaultValue={4.7} disabled />
                </div>
            </div>
            <div className="line-container">
                <div className="filled-line"></div>
                <div className="empty-line"></div>
                <span className="text">Excellent</span>
            </div>
            <div className="line-container">
                <div className="filled-line"></div>
                <div className="empty-line"></div>
                <span className="text">Good</span>
            </div>
            <div className="line-container">
                <div className="filled-line"></div>
                <div className="empty-line"></div>
                <span className="text">Average</span>
            </div>
            <div className="line-container">
                <div className="filled-line"></div>
                <div className="empty-line"></div>
                <span className="text">Below Average</span>
            </div>
            <div className="line-container">
                <div className="filled-line"></div>
                <div className="empty-line"></div>
                <span className="text">Poor</span>
            </div>
            <div className="Field">
                <p className="field-message">Leave Comment</p>
            </div>
            <div className="Reviews" style={{ overflowY: showScroll ? "scroll" : "hidden", height: "300px" }} ref={commentsContainerRef}>
                <div className="review-cards-container">
                    {comments.slice(0, visibleComments).map((comment, index) => (
                        <div className="card-container" key={index}>
                            <div className="card-content">
                          <div>
                                <img src={comment.img} alt="user" />
                        </div>
                        <div className="left-comment">
                          
                              <div className="card-one">
                                
                                <h3 className="card-title">{comment.userName}</h3>
                                <p className="card-date">{comment.date}</p>
                                </div>
                                <Rate defaultValue={comment.stars} disabled />
                                <p className="card-description">{comment.commentText}</p>
                                {index === 2 && (
                                        <>
                                        <div className="two-img">
                                            <div>
                                                <img src={comment.img1} alt="user" />
                                            </div>
                                            <div>
                                                <img src={comment.img2} alt="user" />
                                            </div>
                                            </div>
                                        </>
                                    )}
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
            {visibleComments < comments.length && (
                <button className="view-more-btn" onClick={handleViewMore}>
                    View More
                </button>
            )}
        </div>
    );
}

export default Frame3;

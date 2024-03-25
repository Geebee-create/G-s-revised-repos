import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'; // Importing Card from react-bootstrap
// import MovieCard from './movieCard'; // Importing MovieCard component. I don't think this is needed in this file?

const DiscussionSection = ({ moviePosterWidth }) => {
    const [inputText, setInputText] = useState('');
    const [discussionItems, setDiscussionItems] = useState([]);

    const handlePost = () => {
        if (inputText.trim() !== '') {
            setDiscussionItems(prevItems => [
                ...prevItems,
                { type: 'post', content: inputText, comments: [] }
            ]);
            setInputText('');
        }
    };

    const handleComment = (index) => {
        const commentText = prompt('Enter your comment:');
        if (commentText !== null) {
            setDiscussionItems(prevItems => {
                const updatedItems = [...prevItems];
                updatedItems[index].comments.push(commentText);
                return updatedItems;
            });
        }
    };

    const handleDeleteItem = (index) => {
        setDiscussionItems(prevItems => {
            const updatedItems = [...prevItems];
            updatedItems.splice(index, 1);
            return updatedItems;
        });
    };

    return (
        <div className="discussion-section" style={{ width: moviePosterWidth, margin: '0 auto', textAlign: 'center' }}>
            {/* Discussion input */}
            <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Start a discussion..."
                style={{ width: '100%', height: '100px', borderRadius: '10px', padding: '10px', marginBottom: '10px' }}
            />
            <button className="discussion-action-btn" onClick={handlePost}>Post</button>

            {/* Render discussion items (posts and comments) */}
            <div className="discussion-items" style={{ width: '100%', textAlign: 'left' }}>
                {discussionItems.map((item, index) => (
                    <Card key={index} style={{ marginBottom: '20px' }}>
                        <Card.Body>
                            <Card.Text>{item.content}</Card.Text>
                            {/* Render comments */}
                            {item.comments.map((comment, commentIndex) => (
                                <Card.Text key={commentIndex}>{comment}</Card.Text>
                            ))}
                            {/* Comment button */}
                            <button className="discussion-action-btn" onClick={() => handleComment(index)}>Comment</button>
                            {/* Delete button */}
                            <button className="discussion-action-btn" onClick={() => handleDeleteItem(index)}>Delete</button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default DiscussionSection;
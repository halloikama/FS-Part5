 
import React, { useState } from 'react'


const AddBlogForm = ({ addBlog }) => {
    const [newTitle, setNewTitle] = useState('')
    const [newAuthor, setNewAuthor] = useState('')
    const [newUrl, setNewUrl] = useState('')


    const submitBlog = event => {
        event.preventDefault()

        addBlog(event, newTitle, newAuthor, newUrl)
        setNewTitle('')
        setNewAuthor('')
        setNewUrl('')
    }

    return (
        <form onSubmit={submitBlog}>
            <div>
                title: <input
                    value={newTitle}
                    onChange={({ target }) => setNewTitle(target.value)}
                />
            </div>
            <div>
                author: <input
                    value={newAuthor}
                    onChange={({ target }) => setNewAuthor(target.value)}
                />
            </div>
            <div>
                url: <input
                    value={newUrl}
                    onChange={({ target }) => setNewUrl(target.value)}
                />
            </div>
            <div>
                <button type="submit">create</button>
            </div>
        </form >
    )
}

export default AddBlogForm
import React, { useState } from 'react'
const FORM_ENDPOINT = '/Contact'

function Contact() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        const inputs = e.target.elements
        const data = {}

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name) {
                data[inputs[i].name] = inputs[i].value
            }
        }

        fetch(FORM_ENDPOINT, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Unable to submit form: Response not ok')
            }

            setSubmitted(true)
        })
        .catch((err) => {
            e.target.submit()
        })
    }

    if (submitted) {
        return (
            <>
                <h1>Contact</h1>
                <p>Message delievered. Thank you!</p>
            </>
        )
    }
    return (
        <>
        <h1>Contact</h1>
        <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method='POST'
        >
            <div>
                <input 
                    type='text'
                    placeholder='Your Name'
                    name='name'
                    required
                />
            </div>
            <div>
                <input
                    type='text'
                    placeholder='your.email@example.com'
                    name='email'
                    required
                />
            </div>
            <div>
                <textarea
                    placeholder='Your message.'
                    name='message'
                    required
                />
            </div>
            <div>
                <button type='submit'>
                    Send
                </button>
            </div>
        </form>
        </>
    )
}

export default Contact
import React, { useState } from 'react'
import { Card, Button, Form, Input } from 'semantic-ui-react'
import axios from 'axios'

const FormItem = props => {
    const [username, setUsername] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        axios.get(`https://api.github.com/users/${username}`).then(resp => {
            props.onSubmit(resp.data)
            setUsername('')
        })
    }

    return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={event => setUsername(event.target.value)}
        placeholder="GitHub username"
        required
      />
      <button type="submit">Add card</button>
    </form>
    )
}

export default FormItem

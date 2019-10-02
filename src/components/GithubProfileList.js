import React from 'react'
import GithubProfile from './GithubProfile.js'

const GithubProfileList = props => (
    <div>
        {props.profiles.map((profile, index) => (
            <GithubProfile {...profile} key = {index}/>
        ))}
    </div>
)

export default GithubProfileList
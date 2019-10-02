import React from 'react'
import { Card, Image, Button} from 'semantic-ui-react'
import './GithubProfile.css'

function githubProfile (props){
    return (
        <Card id = 'profileItem'>
            <Card.Content>
                <Image></Image>
                <Card.Header><span id='title'>{props.name}</span></Card.Header>
                <Card.Description><span id='desc'>{props.blog}</span>
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default githubProfile
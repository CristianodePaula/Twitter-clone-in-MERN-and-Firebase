import React from 'react'
import { dataHappening } from '../../resources/Data'
import HappeningCard from '../HappeningCard/HappeningCard'
import {
    Container,
    HappeningBox,
    Title,
    Span
} from './HappeningStyle'

const Happening = () => {
    return (
        <Container>
            <HappeningBox>
                <Title>What’s Happening</Title>
                {dataHappening.map((notice, index) => {
                    return (
                        <div key={index}>
                            <HappeningCard notice={notice} />
                        </div>
                    )
                })}
                <Span>Show more</Span>
            </HappeningBox>
        </Container>
    )
}

export default Happening
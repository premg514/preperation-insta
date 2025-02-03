import React from 'react'

import { Card, ImagePlaceholder, CardTitle } from './styledComponents'

export default function FeatureCard(props) {
    const { card } = props
    return (
        <Card >
            <ImagePlaceholder>{card.icon}</ImagePlaceholder>
            <CardTitle>{card.title}</CardTitle>
        </Card>
    )
}

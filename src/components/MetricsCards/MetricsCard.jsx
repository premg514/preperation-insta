import React from 'react'
import { CiImageOn } from "react-icons/ci";
import { MetricCard, MetricIcon, MetricNum, MetricText } from './styledComponents'

export default function MetricsCard(props) {
    const { card } = props
    return (
        <MetricCard>
            <MetricIcon ><CiImageOn fontSize='28px' /></MetricIcon>
            <div>
                <MetricNum>{card.value}</MetricNum>
                <MetricText>{card.label}</MetricText>
            </div>
        </MetricCard>
    )
}

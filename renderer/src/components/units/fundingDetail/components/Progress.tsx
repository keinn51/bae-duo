import React from 'react'
import * as Styled from '../FundingDetail.style'

const Progress = ({ ...props }) => {
  const { type, data, defaultPrice, defaultMember } = props

  const getFundingInfoItem = () => {
    switch (type) {
      case 'price':
        return (
          <>
            <Styled.FundingInfoItem>
              <div className="title">
                <span>모인 금액</span>
                <span>목표 금액</span>
              </div>
              <div className="value">
                <span>{data.toLocaleString()}</span>
                <span>{defaultPrice}</span>
              </div>
              <div className="progressBar">
                <div
                  className="progressValue"
                  style={data >= defaultPrice ? { width: '100%' } : { width: `${(data / defaultPrice) * 100}%` }}
                ></div>
              </div>
            </Styled.FundingInfoItem>
          </>
        )
      case 'time':
        return (
          <>
            <Styled.FundingInfoItem>
              <div className="title">
                <span>현재 시간</span>
                <span>주문 시간</span>
              </div>
              <div className="value">
                <span>-</span>
                <span>{data}</span>
              </div>
              <div className="progressBar">
                <div className="progressValue" style={{ width: `${(data / 30000) * 100}%` }}></div>
              </div>
            </Styled.FundingInfoItem>
          </>
        )
      case 'member':
        return (
          <>
            <Styled.FundingInfoItem>
              <div className="title">
                <span>현재 인원</span>
                <span>목표 인원</span>
              </div>
              <div className="value">
                <span>{data}</span>
                <span>{defaultMember}</span>
              </div>
              <div className="progressBar">
                <div
                  className="progressValue"
                  style={data >= defaultMember ? { width: '100%' } : { width: `${(data / defaultMember) * 100}%` }}
                ></div>
              </div>
            </Styled.FundingInfoItem>
          </>
        )
    }
  }

  return <>{getFundingInfoItem()}</>
}

export default Progress

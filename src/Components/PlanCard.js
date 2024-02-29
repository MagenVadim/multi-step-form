import React from 'react'

function PlanCard({img_source, title, plan_price, className, handleClick, index, bonus}) {
  return (
    <div className={className} onClick={()=>handleClick(index)}>
      <img src={img_source} alt={title} />
      <div className="plan-info">
        <b>{title}</b>
        <span className="plan-priced">{plan_price}</span>
        <span className="bonus">{bonus}</span>
      </div>
    </div>
  )
}

export default PlanCard

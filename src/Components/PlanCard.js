import React from 'react'

function PlanCard({img_source, title, plan_price}) {
  return (
    <div className="plan-card">
      <img src={img_source} alt={title} />
      <div className="plan-info">
        <b>{title}</b>
        <span className="plan-priced">{plan_price}</span>
      </div>
    </div>
  )
}

export default PlanCard

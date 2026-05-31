import React, { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { TechStackData } from '../../../../assets/data.jsx'
import './worksection.css'

const TechStack = () => {
  const [showAll, setShowAll] = useState(false)

  const visibleTechStack = showAll
    ? TechStackData
    : TechStackData.slice(0, 6)

  return (
    <section className="work-section techstack-section">
      <div className="section-heading">
        <h2>Tech Stack</h2>
        <p>
          Tools and technologies I use every day to build modern web
          experiences.
        </p>
      </div>

      <div className="tech-grid">
        {visibleTechStack.map((tstack) => {
          const Icon = tstack.logo

          return (
            <article key={tstack.id} className="tech-card">
              <div className="tech-icon" style={{ color: tstack.color }}>
                <Icon />
              </div>
              <span>{tstack.iconname}</span>
            </article>
          )
        })}
      </div>

      {TechStackData.length > 6 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '2rem',
          }}
        >
          <button
            onClick={() => setShowAll((prev) => !prev)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.95rem',
              fontWeight: '600',
              color: '#0d6efd',
              transition: 'all 0.3s ease',
            }}
          >
            {showAll ? (
              <>
                View Less <FiChevronUp size={18} />
              </>
            ) : (
              <>
                View More <FiChevronDown size={18} />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  )
}

export default TechStack
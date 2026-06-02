import React from 'react'
import CurrentlyLearning from './CurrentlyLearning'
import Projects from './Projects'
import Experience from './Experience'
import BeyondCode from './BeyondCode'
import { currentlyLearning, experienceTimeline, workProjects, beyondCode } from '../../../../assets/data'
import './worksection.css'

const PresentStatus = () => {
  return (
    <section className="present-status">
      <div className="present-grid">
        <aside className="left-column">
          <CurrentlyLearning list={currentlyLearning} />
          <Experience experience={experienceTimeline} />
        </aside>

        <main className="main-column">
          <Projects projects={workProjects} />
          <BeyondCode list={beyondCode} />
        </main>
      </div>
    </section>
  )
}

export default PresentStatus

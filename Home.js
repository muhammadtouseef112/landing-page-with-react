import React from 'react'

function Home() {
  return (
    <div>
      <div className='home'>
        <div className='left-side'> 
        <h2>Touseef and Almirah Learner`s World </h2>
        <h3>Quality Education Center</h3>
        <p>
            We Provide a quality in our institute and also give conceptual ideas<br></br> about the topics 
            we can not only prepare student for their<br></br> exams also for their future problems also for 
            their dreams
        </p>
        <h4 className='first'>So Start Your Career with us</h4>
        {/* <br></br>    */}
        <h4><marquee> Design Your Dream Career</marquee></h4>
        </div>
        <div className='right-side'>
            <img src='https://t3.ftcdn.net/jpg/02/97/89/28/360_F_297892888_fiCFYX2oB9GvCotLpOBhc5t7RVgNHozm.jpg' height={450} width={500}></img>
        </div>
      </div>
    </div>
  )
}
export default Home;
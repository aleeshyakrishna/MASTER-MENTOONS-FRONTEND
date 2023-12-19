import React from 'react'
import '../css/workshop.css'
import Lottie from 'lottie-react'
import Moon from '../animation/Moon.json'
import bord from '../Images/bord.png'

const Workshop = () => {
  return (
   <div className="workshop">
    
    <Lottie animationData={Moon} className='moon'/>
     <div className="grasss"  data-aos="zoom-in-down"
        data-aos-duration="1000">
    
    <img src={bord} id='workshop'
    />
   
    <p>WorkShop</p>
  </div>

        <div className="agegroup">
            <div className="boy">
                <h1>हASYARAS</h1>
                <img src='https://mentoons.com/img/service1.jpg' />
                <div className="sum">
                    <details>
                        <summary>Activity Description</summary>
                        <ul>
                            <li>Break free from the grip of social media through our holistic laughter workshops. We use the therapeutic power of laughter to relieve stress and mitigate the overwhelming need to constantly check social network channels.</li>
                            <li>Gaming De-Addiction: Overcome gaming addiction with Hasyaras's therapeutic laughter sessions. Our interactive workshops inspire positivity, boost self-esteem, and help to cultivate better gaming ethics and habits in a fun environment.</li>
                            <li>Cell Phone de-addiction for teenagers: Reclaim real connections beyond screens through our engaging laughter therapy. Our specially tailored sessions for teenagers harness the healing power of laughter to reduce dependence on mobile devices and promote healthier lifestyle choices.</li>
                      
                        </ul>
                    </details>
                    <details>
                        <summary>Age Group
</summary>
                        <ul>
                            <li>6-12:</li>
                            <li>No more waiting. It's time to embark on a journey of creativity, fun, bonding and invaluable learning experiences. Book your Storytelling Workshop now!

Be part of a memorable narrative. Let your child experience a wonder that lasts beyond the screen time. Unleash the power of Stories. Get ready for a storytelling adventure like no other. Let's make some unforgettable memories.</li>
                            <li>13-19 :</li>
                            <li>The storytelling abilities you gain from these workshops will not only enhance your personal development but could also offer an unmatched advantage in your career path.

Whether you're stepping into the corporate world, the realm of arts, or even entrepreneurship, storytelling is a vital skill often overlooked. Are you ready to unlock your full potential and set yourself apart from the crowd?</li>
                           
                        </ul>
                    </details>
                </div>
            </div>
            <div className="girl">
            <h1>INSTANT कTHA</h1>
                <img src='https://mentoons.com/img/service2.png' />
                <details>
                        <summary>Activity Description</summary>
                        <ul>
                            <li>Break free from the grip of social media through our holistic laughter workshops. We use the therapeutic power of laughter to relieve stress and mitigate the overwhelming need to constantly check social network channels.</li>
                            <li>Gaming De-Addiction: Overcome gaming addiction with Hasyaras's therapeutic laughter sessions. Our interactive workshops inspire positivity, boost self-esteem, and help to cultivate better gaming ethics and habits in a fun environment.</li>
                            <li>Cell Phone de-addiction for teenagers: Reclaim real connections beyond screens through our engaging laughter therapy. Our specially tailored sessions for teenagers harness the healing power of laughter to reduce dependence on mobile devices and promote healthier lifestyle choices.</li>
                         
                        </ul>
                    </details>
                    <details>
                        <summary>Age Group</summary>
                        <ul>
                            <li>Break free from the grip of social media through our holistic laughter workshops. We use the therapeutic power of laughter to relieve stress and mitigate the overwhelming need to constantly check social network channels.</li>
                            <li>Gaming De-Addiction: Overcome gaming addiction with Hasyaras's therapeutic laughter sessions. Our interactive workshops inspire positivity, boost self-esteem, and help to cultivate better gaming ethics and habits in a fun environment.</li>
                            <li>Cell Phone de-addiction for teenagers: Reclaim real connections beyond screens through our engaging laughter therapy. Our specially tailored sessions for teenagers harness the healing power of laughter to reduce dependence on mobile devices and promote healthier lifestyle choices.</li>
                          
                        </ul>
                    </details>
            </div>
        </div>
      
   </div>
  )
}

export default Workshop
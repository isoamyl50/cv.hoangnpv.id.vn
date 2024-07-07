import CV from 'react-cv'

function App() {
  return (
    <CV
      personalData={{
        name: 'Nguyễn Phạm Việt Hoàng',
        title: 'Computer Science Student',
        image: 'profile-pic.jpg',
        contacts: [
          { type: 'email', value: 'hoangnpv@hoangnpv.id.vn' },
          { type: 'phone', value: '+84 905 350 744' },
          { type: 'location', value: 'Hai Chau District, Da Nang' },
          { type: 'website', value: 'cv.hoangnpv.id.vn' },
          { type: 'github', value: 'github.com/isoamyl50' }
        ]
      }}
      sections={[
        {
          type: 'text',
          title: 'About me',
          content: `  <p>I am an undergraduate Computer Science student at FPT University. 
                      From a very young age, I have been enthusiastic about machines and technology, 
                      and my passion for computers has driven me to constantly learn and innovate. 
                      I enjoy exploring the latest advancements in technology, 
                      and I love sharing my knowledge by helping fellow students with programming-related coursework.</p>
                      <p>My goal is to utilize my technical skills to improve everyday life for myself and other people through practical solutions.</p>
                      <p>In my free time, I enjoy tinkering with electronics, participating in coding challenges, 
                      and contributing to open-source projects. I also love reading tech blogs.</p>

          `,
          icon: 'usertie'
        },

        {
          type: 'common-list',
          title: 'Education',
          icon: 'graduation',
          items: [
            {
              title: 'Computer Science (Undergraduate)',
              authority: 'FPT University',
              authorityMeta: 'GPA: 8.46 on scale of 10',
              rightSide: '2022 - Present'
            },
            {
              title: 'CS50x 2022',
              authority: 'CS50',
              authorityWebSite: 'https://www.youtube.com/@cs50',
              authorityMeta: 'OpenCourseWare',
              rightSide: '2022 - 2023'
            }
          ]
        },

        {
          type: 'experiences-list',
          title: 'Experiences',
          icon: 'archive',
          items: [
            {
              title: 'Web Development',
              company: 'with VieTicket Dev Team',
              companyMeta: 'a group of 5 students',
              description: `This project is an online event ticketing system enabling users to purchase tickets for various events and allowing organizers to create and manage events, including generating seating plans for seat selection.`,
              datesBetween: 'May 2024 - Present',
              descriptionTags: ['Spring Framework', 'Java', 'MySQL', 'Progressive Web App']
            }
          ]
        },

        {
          type: 'projects-list',
          title: 'Projects',
          icon: 'tasks',
          groups: [
            {
              sectionHeader: 'VieTicket',
              description: ' An online event ticketing platform.',
              items: [
                {
                  title: 'The VieTicket Platform (https://www.vieticket.io.vn/)',
                  projectUrl: 'https://www.vieticket.io.vn/',
                  description: `<div>
                                  <p>
                                    Some of my responsibilities in this project:
                                  </p>
                                  <ul>
                                    <li>- Collaborating with team members to establish and fulfill project requirements.</li>
                                    <li>- Engineered and implemented a robust ticket purchasing system, featuring seamless integration with VNPay API for secure transactions, real-time seat status updates for accurate booking and automated generation and email delivery of electronic tickets.</li>
                                    <li>- Developed a progressive web application (PWA) for streamlined QR code ticket scanning and efficient attendee check-in.</li>
                                    <li>- Implemented a comprehensive email service to facilitate targeted communication with users throughout their event experience.</li>
                                    <li>- Deployed the project to Google App Engine, leveraging Cloudflare's reverse proxy for enhanced security and performance.</li>
                                  </ul>
                                  <div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; margin: 2rem auto;"> 
                                    <img src="assets/img/vieticket-main/view-event-details.png" alt="VieTicket Platform Screenshot" style="max-width: 100%;">
                                  </div>
                                </div><br />`
                },
                {
                  title: 'VieTicket Inspector App (https://inspect.vieticket.io.vn/)',
                  projectUrl: 'https://inspect.vieticket.io.vn/',
                  description: `A simple, cross-platform ticket inspection web app built with React, designed to make event check-ins quick and efficient.
                  <div style="display: flex; flex-wrap: wrap; justify-content: space-between; margin: 2rem auto;">
                    <img src="assets/img/inspector/1.png" alt="Login" style="width: 33%; max-width: 100%;">
                    <img src="assets/img/inspector/2.png" alt="Scan to check-in screenshot" style="width: 33%; max-width: 100%;">
                    <img src="assets/img/inspector/3.png" alt="Ticket details screenshot" style="width: 33%; max-width: 100%;">
                  </div><br />
                  <p>GitHub repository of the project: <a href='https://github.com/isoamyl50/vieticket-inspector-pwa/' target='_blank'>https://github.com/isoamyl50/vieticket-inspector-pwa/</a></p>
                  <br />
                  `
                }
              ]
            },

            {
              sectionHeader: 'Personal Project',
              description: 'One of my toy projects.',
              items: [
                {
                  title: 'RP2040 Handwired keypad',
                  projectUrl: 'https://github.com/isoamyl50/qmk_firmware/tree/master/keyboards/handwired/macropad_v2_rp2040/',
                  description: `<p>An 11-key macropad, handwired with a rotary encoder, powered by an RP2040 microcontroller and a customised QMK firmware that I written myself. Features a Neopixel for backlight effects. Here is the video of the breadboard prototype: <p><br />
                                <div style="display: flex; justify-content: center; align-items: center;">
                                  <video controls src="assets/videos/rp2040-keypad.webm" style="max-height: 75vh;"></video>
                                </div>
                                <p>Link to the firmware of the project: <a href='https://github.com/isoamyl50/qmk_firmware/tree/master/keyboards/handwired/macropad_v2_rp2040/' target='_blank'>https://github.com/isoamyl50/qmk_firmware/tree/master/keyboards/handwired/macropad_v2_rp2040/</a></p>
                  `
                }
              ]
            }
          ]
        },

        {
          type: 'common-list',
          title: 'Skills',
          icon: 'rocket',
          items: [
            {
              title: 'Group Working and Communication',
              authority: 'Active listening, Positive Attitude, Providing and Receiving Feedback'
            },
            {
              title: 'Frontend Development',
              authority: 'React, HTML, CSS, JavaScript'
            },
            {
              title: 'Backend Development',
              authority: 'Spring Framework, MySQL (and other SQL dialects), RESTful APIs'
            },
            {
              title: 'Hardware Programming',
              authority: 'Computer Architecture, C Programming, tinkering with microcontrollers'
            },
            {
              title: 'Others',
              authority: 'Computer Networking, Git, GNU/Linux'
            }
          ]
        },

        {
          type: 'common-list',
          title: 'Languages',
          icon: 'language',
          items: [
            {
              title: 'Vietnamese',
              authority: 'Native',
            },
            {
              title: 'English',
              authority: 'Proficient',
              authorityMeta: 'IELTS 7.0',
              rightSide: 'Assesed in Mar 2022'
            },
            {
              title: 'French',
              authority: 'Basic',
              rightSide: 'Learning in Progress'
            }
          ]
        },

        {
          type: 'common-list',
          title: 'Certificates',
          description: '',
          icon: 'comments',
          items: [
            {
              title: 'Certificate of Participation',
              authority: 'chongluadao.vn',
              authorityWebSite: 'https://chongluadao.vn',
              authorityMeta: 'a cybersecurity organisation',
              rightSide: '2023'
            },
            {
              title: 'Honorable Student of Semester',
              authority: 'FPT University',
              authorityMeta: 'for 4 consecutive semesters',
              rightSide: 'Spring 2023 - Spring 2024'
            },
            {
              title: 'Computer Communications',
              authority: 'University of Colorado System',
              authorityWebSite: 'https://www.coursera.org/account/accomplishments/specialization/F36NJPJC8DW5',
              authorityMeta: 'Coursera',
              rightSide: '2023'
            },
            {
              title: 'Web Design for Everybody: Basics of Web Development & Coding',
              authority: 'University of Michigan',
              authorityWebSite: 'https://www.coursera.org/account/accomplishments/specialization/2476JZTHG6LL',
              authorityMeta: 'Coursera',
              rightSide: '2023'
            },
            {
              title: 'Software Development Lifecycle',
              authority: 'University of Minnesota',
              authorityWebSite: 'https://www.coursera.org/account/accomplishments/specialization/84WD7ELVZRHC',
              authorityMeta: 'Coursera',
              rightSide: '2024'
            }
          ]
        }
      ]}
      branding={false}
    />
  )
}

export default App;

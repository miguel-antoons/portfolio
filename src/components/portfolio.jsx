import React from "react";

import Details from './details';

import tensorflow from '../img/Tensorflow.webp';
import tensor1 from '../img/proof/Screenshot from 2022-05-14 20-49-44.png';
import tensor2 from '../img/proof/Screenshot from 2022-05-14 20-56-39.png';

import kotlin from '../img/1_MCU8J5-roudxIIYt1U1J1A.webp';
import kotlin1 from '../img/proof/Screenshot from 2022-05-14 21-17-18.png';
import kotlin2 from '../img/proof/Screenshot from 2022-05-14 21-17-44.png';

import cisco from '../img/e9a735_75588677d68f42f6bfea829ec22cbb0e_mv2.webp';
import cisco1 from '../img/proof/Screenshot from 2022-05-14 21-25-59.png';

import git from '../img/logo-git-icon-1024x1024.webp';
import git1 from '../img/proof/Screenshot from 2022-05-14 21-32-55.png';
import git2 from '../img/proof/Screenshot from 2022-05-14 21-32-58.png';

import devday from '../img/512x512bb.jpg';
import devday1 from '../img/proof/IMG_4044.jpg';
import devday2 from '../img/proof/IMG_3906.jpg';

import mic from '../img/GE7mKjm7_400x400.jpg';
import mic1 from '../img/proof/mic1.png';
import mic2 from '../img/proof/mic2.png';

import festival from '../img/5-Encart-horizontal-Festival-M190x122-300dpi-pdf.jpg';
import festival1 from '../img/proof/festival1.jpeg';
import festival2 from '../img/proof/festival2.jpeg';
import festival3 from '../img/proof/festival3.jpeg';
import festival4 from '../img/proof/festival4.jpeg';

import ticket from '../img/fuselabel.png';

import electrician from '../img/Instalatii_electrice_rezidentiale_900x550.jpg';

import kitchen from '../img/Kitchen-Helper.jpg';

const Portfolio = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalTitle, setModalTitle] = React.useState('');
    const [modalDescription, setModalDescription] = React.useState('');
    const [modalImages, setModalImages] = React.useState([]);
    const [modalProof, setModalProof] = React.useState([]);

    const modalDetails = {
        'tensorflow': {
            'title': 'Introduction to Articicial Intelligence with Tensorflow',
            'description': (
                <>
                This online course is offered by google and works with google's own TensorFlow API's. <br />
                With this course I was able to learn a lot about machine learning and artificial intelligence.
                Thanks to a series of videos, coding exercises, graphical exercises and text courses, it explains
                the fundamentals of machine learning.<br />
                <br />
                The following topics are covered: 
                <ul>
                    <li>creating a model,</li>
                    <li>evaluating model loss,</li>
                    <li>gradient descent,</li>
                    <li>model effectiveness,</li>
                    <li>a bit of neural networks</li>
                </ul>
                <br/>
                For more information, click <a href='https://developers.google.com/machine-learning/crash-course'>here</a></>),
            'images': [tensorflow],
            'proof': [tensor1, tensor2],
        },
        'kotlin': {
            'title': 'Learn Kotlin',
            'description': (
                <>
                This online course is offered by Openclassrooms. <br />
                This course learns the Kotlin programming language. Kotlin is a language developed by Jetbrains and 
                is recommended by Google for Android app development.
                Thanks to a series of videos, coding exercises and text courses, the course learns how Kotlin works 
                and how to write good Kotlin code.<br />
                <br/>
                For more information, click <a href='https://openclassrooms.com/en/courses/5774406-learn-kotlin'>here</a></>),
            'images': [kotlin],
            'proof': [kotlin1, kotlin2],
        },
        'cyber': {
            'title': 'Introduction to CyberSecurity',
            'description': (
                <>
                This online course is offered by cisco. <br />
                This course explains, as it names suggests, the bases you have to know before entering the cybersecurity world.
                The course begins with an explanation of how cybersecurity impacts a normal person (through social media, passwords, IOT).
                It then gives tips on how to improve your online security. Eventually, it lists the available positions within the 
                cybersecurity sector and explains each one of them.<br />
                <br/>
                For more information, click <a href='https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity'>here</a></>),
            'images': [cisco],
            'proof': [cisco1],
        },
        'git': {
            'title': 'Git/GitHub',
            'description': (
                <>
                This online course is offered by Openclassrooms. <br />
                Even though during the courses and project at Ephec we learned git's bases, I felt that in order
                to use the full potential of git it wouldn't be a bad idea to take a course about it.
                The course explains the git commands and when to use them. A very interesting part of the course is 
                when they talk about the different branching strategies for a project. It also explains what is a workflow
                and some types of workflows that exist.<br />
                <br />
                For more information, click <a href='https://openclassrooms.com/en/courses/5671626-manage-your-code-project-with-git-github-old-version'>here</a></>),
            'images': [git],
            'proof': [git1, git2],
        },
        'devday': {
            'title': 'DevDay',
            'description': (
                <>
                This was an event offered by Ephec and the event took place in the movie theater of Louvain-la-Neuve.<br />
                During this event, we could attend different presentations. 
                The presentation topics were very broad (within the information technology sector of course), 
                going from faster coding techniques to efficiently and rapidly deploy and scale very large 
                applications. The presentations talked a lot about new software, specifically designed for developers.<br />
                </>
            ),
            'images': [devday],
            'proof': [devday1, devday2],
        },
        'mic': {
            'title': 'Comment bien démarrer son stage?',
            'description': (
                <>
                This was an online event organized by MIC (Meet, Innovate, Create).<br />
                The event started about a technical topic, where they explained back-end programming in .NET 6.0.
                After that, the topics were generally non-technical. They gave tips on how to feel more comfortable 
                and learn faster trough an internship. And eventually, the spoke about agile project development 
                (scrum, devops, testing, ...) and gitflow. This was a nice event to refresh one's memory before 
                starting an internship.<br />
                <br/>
                For more information, click <a href='https://www.meetup.com/micbelgique/events/283217832/'>here</a></>),
            'images': [mic],
            'proof': [mic1, mic2],
        },
        'festival': {
            'title': 'Festival Maintenant',
            'description': (
                <>
                This festival took place at Louvain-la-Neuve and was organized by 'L'asbl Terre Ouverte'. <br />
                The festival offered multiple presentations, all about climate and solidarity. Among other things, 
                they talked about the benefits of repairing and recycling small electronics.<br />
                At another presentation about solidarity, they talked about journalism and how it could help improve 
                solidarity and the climate.<br />
                <br/>
                For more information, click <a href='https://www.festivalmaintenant.be/'>here</a></>),
            'images': [festival],
            'proof': [festival1, festival2, festival3, festival4],
        },
        'ticket': {
            'title': 'Fuse Label Program',
            'description': (
                <>
                This was a program developed for an electrician company named Antoons Luc SRL/BV.<br />
                The program allows them to organize and make fuse labels faster and easier for their clients.
                The program is written in HTML5, CSS3 and vanilla JavaScript and was made during the July 2020.<br />
                <br/>
                For more information, click <a href='https://github.com/miguel-antoons/fuse-label'>here</a></>),
            'images': [ticket],
            'proof': [ticket],
        },
        'electrician': {
            'title': 'Electrician at Antoons Luc SRL/BV',
            'description': (
                <>
                During the holidays of 2020, i accepted to work as an electrician.
                Thanks to this job I learned how electricity and internet is spread across 
                the house. Furthermore, this job challenged one's discipline and learns to think 
                before doing something.<br />
                <br />
                </>),
            'images': [electrician],
            'proof': [],
        },
        'kitchen': {
            'title': 'Introduction to Articicial Intelligence with Tensorflow',
            'description': (
                <>
                The company's services were butcher, caterer, baker and they did also 
                have a little shop. I worked as kitchen aid, so I prepared food to be sold in the shop.
                </>),
            'images': [kitchen],
            'proof': [],
        },
    };

    const openModal = (key) => {
        setModalTitle(modalDetails[key]['title']);
        setModalDescription(modalDetails[key]['description']);
        setModalImages(modalDetails[key]['images']);
        setModalProof(modalDetails[key]['proof']);
        setModalShow(true);
    }

    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Check out some of my non-school activities and projects below
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box" onClick={() => openModal('devday')}>
                  <div className="work-img">
                    <img src={devday} alt="devday logo" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">DevDay</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Event
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box" onClick={() => openModal('electrician')}>
                  <div className="work-img">
                    <img src={electrician} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Electrician at Antoons Luc BV/SRL</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Student Job
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box" onClick={() => openModal('kotlin')}>
                  <div className="work-img">
                    <img src={kotlin} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Kotlin Course</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Kotlin
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box" onClick={() => openModal('git')}>
                  <div className="work-img">
                    <img src={git} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">GitHub/Git Course</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Git
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box" onClick={() => openModal('cyber')}>
                  <div className="work-img">
                    <img src={cisco} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Cisco Introduction to Cybersecurity Course</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Networking</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box" onClick={() => openModal('tensorflow')}>
                  <div className="work-img">
                    <img src={tensorflow} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Google Tensorflow Course</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Python3, data science
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box" onClick={() => openModal('ticket')}>
                  <div className="work-img">
                    <img src={ticket} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Fuse Label Program</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 JavaScript
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box" onClick={() => openModal('kitchen')}>
                  <div className="work-img">
                    <img src={kitchen} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Kitchen Aid at Benoît & Veerle BV</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Student Job
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box" onClick={() => openModal('festival')}>
                  <div className="work-img">
                    <img src={festival} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Festival Maintenant</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Event
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box" onClick={() => openModal('mic')}>
                  <div className="work-img">
                    <img src={mic} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Comment bien démarrer mon stage!</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Event
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <Details 
            show={modalShow}
            onHide={() => setModalShow(false)}
            title={modalTitle}
            description={modalDescription}
            pictures={modalImages}
            proof={modalProof}
        />
      </section>
    );
}

export default Portfolio;

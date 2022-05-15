import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "100%", value: "100" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "95%", value: "95" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
        { id: "PHP_skill", content: "PHP", porcentage: "65%", value: "65" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "SQL",
          content: "SQL",
          porcentage: "55%",
          value: "55"
        },
        {
          id: "Joomla",
          content: "Joomla",
          porcentage: "65%",
          value: "65"
        },
        {
            id: "MongoDB",
            content: "MongoDB",
            porcentage: "30%",
            value: "30"
        },
        {
            id: "Kotlin",
            content: "Kotlin",
            porcentage: "55%",
            value: "55"
        },
        {
            id: "Machine Learning",
            content: "Machine Learning",
            porcentage: "15%",
            value: "15"
        },
        {
            id: "C",
            content: "C",
            porcentage: "50%",
            value: "50"
        },
        {
            id: "linux",
            content: "Linux",
            porcentage: "75%",
            value: "75"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "My name is Miguel Antoons, born the 28th of January 2001 and I am finishing my bachelor in information Technology at Ephec. Information technology has always been interesting to me since it is a often changing and very broad sector. This has the benefit that there are always new things to learn."
        },
        {
          id: "second-p-about",
          content:
            "More precisely, the sectors I'd like to work in are the data science and the cybersecurity sectors. They are sectors that are quietly new and that are growing very fast with a lot of opportunities on the table. Furthermore, both of those sectors offer complicated challenges with, on the data-science side, a lot of math implicated, and on the cybersecurity side, software to protect from constantly evaluating hackers."
        },
        {
          id: "third-p-about",
          content:
            <>Below, you can check-out some non-school activities and projects of mine. Don't hesitate to <a href="#contact">contact</a> me for further question, or download my resume <a href='../files/miguel_antoons_cv.pdf' download>here</a>.</>
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

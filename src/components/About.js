import React, { Component } from "react";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import mongodbIcon from "@iconify/icons-logos/mongodb";
import bootstrapIcon from "@iconify/icons-logos/bootstrap";
import azureIcon from "@iconify/icons-logos/azure";
import Cplusplus from "@iconify/icons-logos/c-plusplus";
import ibmI from "@iconify/icons-logos/ibm";
import nodeJS from "@iconify/icons-logos/nodejs-icon";
import grafana from "@iconify/icons-logos/grafana";
import JS from "@iconify/icons-logos/javascript";
import html from "@iconify/icons-logos/html-5";
import css from "@iconify/icons-logos/css-3";
class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={JS}
                    style={{ fontSize: "1500%", margin: "20%" }}
                  />

                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "1000%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={Cplusplus}
                    style={{ fontSize: "1000%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={html}
                    style={{ fontSize: "1000%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={css}
                    style={{ fontSize: "1000%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={nodeJS}
                    style={{ fontSize: "1000%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={angularIcon}
                    style={{ fontSize: "700%", margin: "9% 5% 0 5%" }}
                  />

                  <Icon
                    icon={mongodbIcon}
                    style={{ fontSize: "500%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={bootstrapIcon}
                    style={{ fontSize: "500%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={azureIcon}
                    style={{ fontSize: "500%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={ibmI}
                    style={{ fontSize: "500%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={grafana}
                    style={{ fontSize: "500%", margin: "9% 5% 0 5%" }}
                  />


                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} I have extensive experience with React.Js, Angular, bootsrap, mongoDB, PL/SQL And Azure web services. </span>
                    <br />
                    <br />
                    {about}
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

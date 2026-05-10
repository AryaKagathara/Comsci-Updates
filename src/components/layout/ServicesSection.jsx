import Link from "next/link";
import Image from "next/image";
import cross from "@/../public/images/orange-cross.svg";
import world from "@/../public/images/globe.webp";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import PrimaryBtn from '@/components/layout/PrimaryBtn';
import React from "react";
import servicesData from '../../files/services.json';


const ServicesSection = ({ isHome }) => {
  // SEO: render synchronously at SSR time so bots see service list, not "Loading...".
  const services = isHome ? servicesData.services.slice(0, 3) : servicesData.services;
  const marqueeItems = servicesData.marquee;
  const [activeTab, setActiveTab] = useState(services[0]?.link || '');

  if (!services || services.length === 0) {
    return null;
  }

  return (
    <>
      <div className="services">
        <div className="container">
          <div className="service_heading" data-scroll data-scroll-speed=".2">
            <h2>
              We engineer bespoke digital solutions from <span className="primary-text">web design to robust AI software</span> driving measurable results for industry leaders
              <div className="globe">
                w
                <div className="world_img">
                  <Image src={world} alt="Globe icon — Comsci serves clients worldwide" />
                </div>
                rldwide.
              </div>
            </h2>
          </div>

          {/* desktop version */}
          <div className="service_tabsection d-none d-lg-block">
            {/* Added a check to ensure activeTab is set before rendering */}
            {activeTab && (
              <Tab.Container id="tabs_wrapper" activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
                <div className="row">
                  <div className="heading">
                    <h2>We don't just build websites, we architect regional dominance through:</h2>
                  </div>
                  <div className="col-lg-6">
                    <div className="tab_section">
                      <Nav variant="pills" className="flex-column">
                        {services.map((service) => (
                          <Nav.Item key={service.id}>
                            <div className="service_wrap">
                              <Nav.Link eventKey={service.link}>
                                {service.title}
                                <span>
                                  <Image src={cross} alt="cross-arrow" quality={100} />
                                </span>
                              </Nav.Link>
                            </div>
                          </Nav.Item>
                        ))}
                      </Nav>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <Tab.Content>
                      {services.map((service) => (
                        <Tab.Pane key={service.link} eventKey={service.link}>
                          <div className="content_box">
                            <div className="img_wrap">
                              <Image
                                quality={100}
                                src={service.image}
                                alt={service.alt}
                                width={1000} height={1000}
                              />
                            </div>
                            <span>{service.shortDescription}</span>
                            <div className="learn_btn">
                              <Link href={`/${service.link}`}>{service.button_text}</Link>
                            </div>
                          </div>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </div>
                </div>
              </Tab.Container>
            )}
          </div>

          {/* mobile version */}
          <div className="mobile_service_tabsection d-lg-none">
            <div className="heading">
              <span>Services</span>
            </div>
            {/* Fixed Accordion key to use a string as expected by Bootstrap */}
            <Accordion defaultActiveKey="0">
              {services.map((service, index) => (
                <Accordion.Item eventKey={index.toString()} key={service.id}>
                  <Accordion.Header>{service.title}</Accordion.Header>
                  <Accordion.Body>
                    <div className="content_box">
                      <div className="image_wrap">
                        <Image src={service.image} alt={service.alt} width={1000} height={1000} />
                      </div>
                      <span>{service.shortDescription}</span>
                      <div className="learn_btn">
                        <Link href={`/${service.link}`}>{service.button_text}</Link>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>

          {isHome && (
            <div className="btn_wrap_block">
              <PrimaryBtn name="See all" arrow="no" link="/services" />
            </div>
          )}
        </div>

        {/* ... (rest of the marquee code) */}
      </div>
    </>
  );
};

export default ServicesSection;
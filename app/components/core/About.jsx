import React from 'react';
import {Jumbotron, Grid, Row, Col, Panel,Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { Link } from 'react-router';

class About extends React.Component {
  constructor(){
    super();
    console.log("Hello Abt");

  }
  render(){
    return (
      <div>
        <Grid>
          <Row>
            <Col md={12} className="promo">
                <h3>
                  Find a Part Fast!
                </h3>
                <p>
                  Buy cut-price car parts with our free online parts finder to save time and money.  Tell us what you need and compare no obligation prices, we’ll check stock from our suppliers and scrap yards so you can compare prices. Why to ring round yourself when you can do it all at once!
                </p>

                <h3>
                  eparts - Any Parts for Any Car Anywhere!
                </h3>
                <p>
                  With over 50 Supplier source worldwide, we offer service parts at very competitive prices with easy delivery across the whole of the Bangladesh. We are one of Bangladesh top distributors of used automotive parts. All our parts are imported from Japan, Malaysia and Europe. We import engines from 1979 up to current. Toyota, Nissan, Mitsubishi, Mazda, Isuzu, Datsun, Volvo, BMW and Mercedes.
                </p>
                <Row>
                  <Col md={1}></Col>
                  <Col md={4} className="promo">
                <b>
                  We specialise in all the major car parts like
                </b>
                <ul>
                  <li>
                    Engines
                  </li>
                  <li>
                    Gearboxes
                  </li>
                  <li>
                    Half Cuts
                  </li>
                  <li>
                    Driveshaft
                  </li>
                  <li>
                    Tail Shafts
                  </li>
                  <li>
                    Suspension(Front/Back)
                  </li>
                  <li>
                    Shock Absorbers
                  </li>
                  <li>
                    Jacks
                  </li>
                  <li>
                    Axle Sets
                  </li>
                  <li>
                    Exhaust
                  </li>
                  <li>
                    Brake Pads
                  </li>
                  <li>
                    Blades
                  </li>
                  <li>
                    Control Arms
                  </li>
                  <li>
                    Starters
                  </li>
                  <li>
                    AC Pumps
                  </li>
                </ul>
              </Col>
                <Col md={4}></Col>

                  <Col md={4} className="promo">
                <b>
                  We also offer massive range of accessories
                </b>
                <ul>
                  <li>
                    Door(Power)
                  </li>
                  <li>
                    Bonnet
                  </li>
                  <li>
                    Sutter
                  </li>
                  <li>
                    Mudgut
                  </li>
                  <li>
                    Backdala
                  </li>
                  <li>
                    Nose Cut
                  </li>
                  <li>
                    Lights
                  </li>
                  <li>
                    Lights and Many Other Accessories
                  </li>
                </ul>

              </Col>
            </Row>

                <h4>
                  All the essential car maintenance essentials are available to order online today
                </h4>
                <p>
                  If you need any further information before ordering your car parts online then our dedicated team are on hand with expert advice and assistance.
                  our first choice is the Japan leading Car Part Finder with more than 100,000 New & Used car spare parts For Sale and in stock. We have a network of over 50 24x7, Van & Car Breakers & new parts suppliers across the Asia, offering guaranteed used spares for sale at up to 80% off new prices. Our depots have a huge range of parts for almost every make and model, current as well as many out of production.
                  New & Used Car Spares For Less than main dealers: Established in 2015, we’re the original on-line car spares finder. If you’re looking for guaranteed cheap parts and want to buy car parts for less, 1st Choice Spares is certainly worth giving a try. We source thousands of spares for sale and can find and supply you the auto and vehicle spares you need quickly.
                </p>

                <p>
                  <b>Redline Trade Auto Servicing Centre</b> was established in 2010 as a partnership Firm and registered with the registrar of Joint Stock Companies vide registration number PF 33034/10 dated 25th February, 2010. The concern was also registered with the Board of Investment with the registration number L-87031003060-H dated 14th March, 2010. The Firm is a member of the Bangladesh Automobile Workshop Malik Samity vide membership number 613 . In addition to workshop activities, the Firm is involved in import of used automobiles spare parts and engines mainly from Japan. Starting business in 2010, the Firm grown as one the leading concern in the Automobile spare parts and workshop business.
                </p>
            </Col>
          </Row>


        </Grid>
      </div>

    )}
  }
  export default About;

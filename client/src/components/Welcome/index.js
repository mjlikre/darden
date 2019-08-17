import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import {Link} from "react-router-dom";


const Welcome = () => {


  return (
      <div>
          <div className="container">
              <div>
                  <h3>Ready to <ReactTypingEffect
                      text={["Work?", "Find Work?"]} //text=["Hello.", "World!"]
                  /></h3>
              </div>
              <div className='row'>
                  <div className='col-md-3'>
                      <div className="card">
                          <img className="card-img-top" src="https://cdn.fstoppers.com/styles/large-16-9/s3/wp-content/uploads/2014/03/90C89471.jpg" alt = ''/>
                              <div className="card-body">
                                  <h5 className="card-title">Meet Lola</h5>
                                  <p className="card-text">Lola is a model, she is trying to find some modeling work, if you want to book someone like her, submit a booking request and she will appear.</p>
                              </div>
                      </div>
                  </div>
                  <div className='col-md-3'>
                      <div className="card" >
                          <img className="card-img-top" src="https://www.getaway.co.za/wp-content/uploads/2019/05/BnWTurkanaWoman-768x508.jpg" alt = ''/>
                              <div className="card-body">
                                  <h5 className="card-title">Meet Juan</h5>
                                  <p className="card-text">Juan is a gardener, he has a job as a security guard, but he is trying to do some gardening on the side, if you want to hire some like him, submit a booking request.</p>

                              </div>
                      </div>
                  </div>
                  <div className='col-md-3'>
                      <div className="card">
                          <img className="card-img-top" src="https://dylanpatrickphotography.com/wp-content/uploads/2018/02/hat-portrait-series-dylan-patrick-photography-1.jpg" alt = ''/>
                              <div className="card-body">
                                  <h5 className="card-title">Card title</h5>
                                  <p className="card-text">Juan is a gardener, he has a job as a security guard, but he is trying to do some gardening on the side, if you want to hire some like him, submit a booking request.</p>

                              </div>
                      </div>
                  </div>
                  <div className='col-md-3'>
                      <div className="card">
                          <img className="card-img-top" src="https://cdn.mos.cms.futurecdn.net/xgc36EhSDW9Zu3RGLCfLEg.jpg" alt = ''/>
                          <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">Some quick example text to build on the card title and make
                                  up the bulk of the card's content.</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div>
                  <h2>Everyday countless people like these are trying to find a job on the side, whether is for fun or for money. We provide a platform for peopel like them, or maybe even people like you, to fulfill their needs</h2>
              </div>
              <div>
                  <Link to='/signup'><button className="btn btn-primary">Sign up as a service provider</button></Link>
                  <br/>
                  <br/>
                  <button className="btn btn-primary"><Link to='/seekersignup'/>Sign up as a service seeker</button>
                  <br/>
                  <br/>
                  <Link to='/signin'><button className="btn btn-primary">Sign in</button></Link>

              </div>

          </div>
      </div>

  );
};

export default Welcome;
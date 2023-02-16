import React from "react";

const About = () => {
  return (
<div class="container wrapabout">
        <div class="red"></div>
        <div class="row">
            <div class="col-lg-6 align-items-center justify-content-left d-flex mb-5 mb-lg-0">
                <div class="blockabout">
                    <div class="blockabout-inner text-center text-sm-start">
                        <div class="title-big pb-3 mb-3">
                            <h3>ABOUT US</h3>
                        </div>
                        <p class="description-p text-muted pe-0 pe-lg-0">
                        Welcome to our platform! Here at our platform, we provide for you a safe and secure place to create Posts about nearly any topic. We understand how important it is to have a creative outlet that allows you to express yourself and share your thoughts with others. With our platform, you can easily create original content and reach a global audience in just a few clicks.

                        </p>
                        <p class="description-p text-muted pe-0 pe-lg-0">You can also check out our social media apps throught the links below.</p>
                        <div class="sosmed-horizontal pt-3 pb-3">
                            <a href="https://www.facebook.com/adem.miladi.79"><i style={{marginRight: '25px'}} class="fa fa-facebook"></i></a>
                            <a href="https://www.linkedin.com/in/miladi-adem-23765b255/"><i style={{marginRight: '25px'}} class="fa fa-linkedin"></i></a>
                            <a href="#"><i style={{marginRight: '25px'}} class="fa fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 mt-5 mb-0 mt-lg-0">
                <figure class="potoaboutwrap">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ322y5cp_L60d7_wAiK5hYDSIloUiFI9rvzA&usqp=CAU"width="90%" height="80%" style={{borderRadius:"6px"}} alt="potoabout" />
                </figure>
            </div>
        </div>
    </div>
  );
};

export default About;
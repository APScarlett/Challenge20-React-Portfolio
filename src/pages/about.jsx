function About({handlePageChange}){
    return <>
        <div class="container-xxl py-5" id="about">
            <div class="container py-5 px-lg-5">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h5 class="text-primary-gradient fw-medium">About Me</h5>
                        <h1 class="mb-4">New to the industry and looking to prove myself!</h1>
                        <p class="mb-4">Hello my name is Alexander Scarlett and I am a new Dev looking to enter the industry. I originally have some background in IT but while getting my Bachelors in Cybersecurity and IT Management I had a taste of web development. I have since decided that I want to do more and see in this industry. I decided to attend the UM FullStack bootcamp in hopes to give myself the opportunity to further that goal. Now that I have completed the course I am using this page to showcase the knowledge I have learned and the skills that I have developed.</p>
                        <a onClick={()=> handlePageChange("Contact")} class="btn btn-primary-gradient py-sm-3 px-4 px-sm-5 rounded-pill mt-3">Contact Me</a>
                    </div>
                    <div class="col-lg-6">
                        <img class="img-fluid wow fadeInUp" data-wow-delay="0.5s" src="/img/WIN_20231130_17_26_41_Pro.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default About
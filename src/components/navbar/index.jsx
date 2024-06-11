function NavBar({currentPage,handlePageChange }) {
    return <>
            <div class="container-xxl position-relative p-0" id="home">
            <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="" class="navbar-brand p-0">
                    <h1 class="m-0">Alexander Scarlett's Portfolio</h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav mx-auto py-0">
                        <a onClick={()=>handlePageChange("Home")} class="nav-item nav-link active">Home</a>
                        <a onClick={()=>handlePageChange("About")} class="nav-item nav-link">About</a>
                        <a onClick={()=>handlePageChange("Portfolio")} class="nav-item nav-link">PortFolio</a>
                        <a onClick={()=>handlePageChange("Contact")} class="nav-item nav-link">Contact</a>
                    </div>
                </div>
            </nav>

            <div class="container-xxl bg-primary hero-header">
                <div class="container px-lg-5">
                    <div class="row g-5">
                        <div class="col-lg-8 text-center text-lg-start">
                            <h1 class="text-white mb-5 animated slideInDown">Thank you for taking a look at my Portfolio!</h1>
                            <a onClick={()=> handlePageChange("Contact")} class="btn btn-secondary-gradient py-sm-3 px-4 px-sm-5 rounded-pill animated slideInRight">Please Contact Me!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default NavBar
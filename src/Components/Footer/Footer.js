import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="black" className="font-small pt-2 mt-4">
    
      <div className="footer-copyright text-center py-3 mb-6">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/Warfail"> Warfail </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
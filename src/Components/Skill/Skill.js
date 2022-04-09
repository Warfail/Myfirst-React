import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './Skill.css'

 function Skill () {
  return (
    <div>
    <Container
      className="mt-4"
      
    >
    <Row
      xs="2"
    >
      <Col>


    
      <div className='card-container'>
      <div className="image-container">
          <img src={require("./image/Responsive.png")} alt='none'/>
        </div>
        <div className="card-content">
        <div className="card-title">
          <h3>Responsive Web</h3>
        </div>
        <div className="card-body">
          <p>Mengembangkan Web dengan Sistem Bursa Kerja Sebagai Projek</p>
        </div>
        
        </div>
        <div className="btn">
          
          <a>
            Repository
          </a>
          
        </div>
</div>
</Col>
<Col>
<div className='card-container'>
      <div className="image-container">
          <img src={require("./image/C.png")} alt='none'/>
        </div>
        <div className="card-content">
        <div className="card-title">
          <h3>C/C++</h3>
        </div>
        <div className="card-body">
          <p>Mengembangkan Sistem CRUD dengan C dan mendesain 3D dengan C++</p>
        </div>
        
        </div>
        <div className="btn">
          
          <a>
            Repository
          </a>
          
        </div>
</div>
</Col>
<Col>
<div className='card-container'>
      <div className="image-container">
          <img src={require("./image/PHP.png")} alt='none'/>
        </div>
        <div className="card-content">
        <div className="card-title">
          <h3>PHP</h3>
        </div>
        <div className="card-body">
          <p>Projek Mengembangkan Web dengan menggunakan PHP</p>
        </div>
        
        </div>
        <div className="btn">
          
          <a>
            Repository
          </a>
          
        </div>
</div>
</Col>
  
  </Row>
</Container>

</div>

  )
}


export default Skill;


import React from 'react'
import { Col, Container, Row } from 'reactstrap'

export const Intro = () => {
    // class="paragraf1" style="text-align: center;"
    return (
        // <div>
        //      <h2></h2>
        // <p>Perkenalkan nama saya Rezky Agung Kurniawan saya adalah mahasiswa dari Universitas Kristen Satya Wacana. Saya biasanya menghabiskan waktu saya dengan coding dan bermain game, karena moto saya adalah <i>work hard play hard.</i> Saya memiliki kepribadian
        //     bersahabat dan mudah membaur, namun tetap untuk menilai karakter seseorang tetap dari siapa yang melihat. Saya hanya melihat karakter saya sendiri dari kacamata saya. untuk kepribadian saya silahkan anda yang menentukan.

        // </p>
        <Container>
  <Row>
    <Col
      className="mt-5 mb-2 bg-light border"
      xs="auto"
      fluid="md"
      
    >
      Perkenalkan nama saya Rezky Agung Kurniawan saya adalah mahasiswa dari Universitas Kristen Satya Wacana. Saya biasanya menghabiskan waktu saya dengan coding dan bermain game, karena moto saya adalah <i>work hard play hard.</i> Saya memiliki kepribadian
             bersahabat dan mudah membaur, namun tetap untuk menilai karakter seseorang tetap dari siapa yang melihat. Saya hanya melihat karakter saya sendiri dari kacamata saya. untuk kepribadian saya silahkan anda yang menentukan.
    </Col>
  
  </Row>
</Container>
        // </div>
    )
}

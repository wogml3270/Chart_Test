import React from 'react'

const header = () => {


  return (
    <>
      <div className="header-container">

        <div className="header-logo">
          <a href="/"></a>
          <a href="/">LOGO</a>
        </div>

        <div className="header-nav bg-red-500">
          <ul>
            <li><a href="/">menu1</a></li>
            <li><a href="/">menu2</a></li>
            <li><a href="/">menu3</a></li>
          </ul>
        </div>

        <div className="header-right">
          <img src={'https://tkdw-img.s3.ap-northeast-2.amazonaws.com/header/option.png'} alt="설정" />
          <img src={'https://tkdw-img.s3.ap-northeast-2.amazonaws.com/header/bell.png'} alt="알림" />
        </div>

      </div>
    {/* <div className="header-container">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <div className="header-logo">
              <a href="/"></a>
              <a href="/">LOGO</a>
            </div>
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">menu1</Nav.Link>
              <Nav.Link href="#">menu2</Nav.Link>
              <Nav.Link href="#">menu3</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#">
                <img src={require('../../images/header/option.png')} alt="option" />
              </Nav.Link>
              <Nav.Link eventKey={2} href="#">
                <img src={require('../../images/header/bell.png')} alt="bell" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div> */}
    </>
  )
}

export default header
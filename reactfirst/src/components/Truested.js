import styled from "styled-components";

const Truested = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 5+ Companies</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZWlVW19MbreWK_K2SoajA25Ewokpd97Y8v56aDiA&s"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://bl-i.thgim.com/public/incoming/onzgbg/article65561350.ece/alternates/LANDSCAPE_1200/Navneet%20Education.jpg"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://cdn.dribbble.com/users/403543/screenshots/15736447/retro_logo.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAujKw1hjdQUbMFXEwCbIK15WOwIATAK8085NdP_03wQ&s"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://cdn.shortpixel.ai/spai/q_lossy+w_924+to_webp+ret_img/brandyuva.in/wp-content/uploads/2017/09/montex-ballpen-logo.jpg"
              alt="trusted-brands"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 6rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.7rem;
    font-weight: bold;
  }
  img {
    min-width: 6rem;
    height: 6rem;
  }
  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: block;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
    .slide {
      padding-bottom: 10px;
    }
  }
`;

export default Truested;

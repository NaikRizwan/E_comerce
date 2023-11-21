import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
}


html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
}

body::-webkit-scrollbar {
  width: 1.5rem;
}

body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}

body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}

h1,
h2,
h3,
h4 {
   font-family: "Work Sans", sans-serif;

}

h1 {
  color: ${({ theme }) => theme.colors.heading};
  font-size: 6rem;
  font-weight: 900;
}



h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

p, button {
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.65rem;
  line-height: 1.5;
  font-weight:400;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}


${"" /* resuable code section  */}
.vl {
  border-left: 6px solid green;
  height: 200px;
}
.container {
  max-width: 120rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 9rem;
}
.grid1 {
  display: grid;
}
.grid-two-column {
  grid-template-columns: repeat(2, 1fr);

}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}

.grid-five-column{
  grid-template-columns: repeat(5, 1fr);
}
.grid-seven-column{
  grid-template-columns: repeat(7, 1fr);
  margin-left: 5%;
  margin-right: 5%;
  justify-items: center;
}

  .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 6rem;
      text-transform: capitalize;
    }

     .intro-data {
      margin-bottom: 0;
      text-transform: uppercase;
      color: #5138ee;
    }

   .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
    .login_buttonf {
      background-color: #3498db;
      color: #fff;
      padding: 9px 12px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .login_buttonf:hover {
      background-color: #2980b9; /* New background color on hover */
    }
    .login_inputf {
      width: 70%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
// input, textarea{
//     max-width: 50rem;
//     color: ${({ theme }) => theme.colors.black};
//     padding: 1.6rem 2.4rem;
//     border: 1px solid ${({ theme }) => theme.colors.border};
//     // text-transform: uppercase;
//    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
// }
//     input[type="submit"]{
//     max-width: 16rem;
//     margin-top: 2rem;
//     background-color: ${({ theme }) => theme.colors.btn};
//     color: ${({ theme }) => theme.colors.white};
//     padding: 1.4rem 2.2rem;
//     border-style: solid;
//     border-width: .1rem;
//     // text-transform: uppercase;
//     font-size: 1.8rem;
//     cursor: pointer;
  
//     }

@media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
    max-width: 130rem;
    padding: 0 3.2rem;
  }
  .animated-heart {
    font-size: 1.9em;
  }
  }

   @media (max-width: ${({ theme }) => theme.media.mobile}) {
       html {
      font-size: 50%;
    }

.grid{
  gap: 3.2rem;
}
      .grid-two-column , .grid-three-column, .grid-four-column{
          grid-template-columns: 1fr;
        }
    }

`;

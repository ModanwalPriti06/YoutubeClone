import styled from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Video from "./pages/Video";

const Container = styled.div`
  display: flex;
`

const Main = styled.div`
  flex : 7;
  background-color: ${({theme})=> theme.bg};

`
const Wrapper = styled.div`
padding: 22px 96px`

function App() {
  const [darkMode, setDarkMode] = useState(true)
  return(
    <ThemeProvider theme = {darkMode? darkTheme : lightTheme}>
    <Container>
      <BrowserRouter>
      {/* menu section up  part -1 vertical*/}
      <Menu darkMode={darkMode} setDarkMode = {setDarkMode}/>
        {/* All video card and navigation section part 2 */}
      <Main>
        <Navbar/>
        <Wrapper>
          <Routes>
            <Route path="/">
                <Route index element={<Home/>}/>
                <Route path="signin" element={<SignIn/>}/>
            </Route>
            <Route path="video">
                <Route path=":id" element={<Video/>}/>
            </Route>
            </Routes>      
         </Wrapper>

      </Main>
      </BrowserRouter>
    </Container>
   </ThemeProvider>
  )
}

export default App;

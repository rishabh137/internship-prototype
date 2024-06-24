import { AppBar, Toolbar, styled, Box } from "@mui/material"
import { NavLink } from "react-router-dom"

const StyledAppBar = styled(AppBar)({
    background: '#111',
    minHeight: "80px",
    alignItems: "center",
    justifyContent: "center",

    '& > div > div > a': {
        color: "#fff",
        textDecoration: "none",
        margin: "0 2rem",
        fontSize: "18px"
    }
})

const Header = () => {
    return (
        <StyledAppBar position="static">
            <Toolbar>

                <Box>
                    <NavLink to="/" >Home</NavLink>
                </Box>
                <Box>
                    <NavLink to="/" >About Us</NavLink>
                </Box>
                <Box>
                    <NavLink to="/internship">Internships</NavLink>
                </Box>
                <Box>
                    <NavLink to="/blog">Blog</NavLink>
                </Box>
                <Box>
                    <NavLink to="/feedback">Feedback</NavLink>
                </Box>

            </Toolbar>
        </StyledAppBar>
    )
}

export default Header
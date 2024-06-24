import { Box, Typography, styled } from "@mui/material"
import pic from "../img/illustration-1.png"

const StyledBar = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    '& > div > h1': {
        fontSize: "3rem",
        fontWeight: "bolder",
    },

    '& > div > p': {
        fontSize: "1.2rem",
        marginTop: "20px"
    },
})

const Home = () => {
    return (
        <>
            <StyledBar>
                <Box>
                    <h1>Providing The Best Services & IT Solutions</h1>
                    <Typography>We believe in providing best career opportunities!
                        Excel your growth towards future through our
                        virtual internship program today.</Typography>
                </Box>
                <img src={pic} alt="pic" />
            </StyledBar>
        </>
    )
}

export default Home
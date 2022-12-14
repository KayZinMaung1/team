import { Box } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import ShowPlayers from "./ShowPlayers";
import ShowTeams from "./ShowTeams";

const pages = [
    {
        name: 'Players',
        route: 'show-players',
        element:<ShowPlayers/>,
        key: 1

    },
    {
        name: 'Teams',
        route: 'show-teams',
        element:<ShowTeams/>,
        key: 2
    }
   
];

const Admin = () => {
    return (
        <Box>
            <ResponsiveAppBar pages={pages} />
            <Box sx={{ bgcolor:'white',mt: 15 ,padding: '1% 16%' }} component='main'>
            <Routes>
                    <Route path="/" element={<Navigate to="/admin/show-players"></Navigate>}></Route>
                    {pages.map((page)=>(
                        <Route path={page.route} element={page.element} key={page.key}></Route>
                    ))}
                    
                </Routes>
            </Box>
        </Box>
    )
}
export default Admin;
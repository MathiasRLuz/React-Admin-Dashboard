import { Box } from "@mui/system"
import { Header } from "../../components/Header"

export const Dashboard = () => {
    return <Box m="20px">
        <Box display="flex" justifyContent="space-between">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard"/>
        </Box>
    </Box>
}
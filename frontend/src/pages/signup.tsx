import React from "react";
import { SlLogin } from "react-icons/sl";
import {Box , Typography , Button} from "@mui/material";
import CustomizedInput from "../components/shared/Customizedinput";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";


const Signup = () => {
    const auth = useAuth();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        try {
            toast.loading("Signing Up",{ id:"signup" });
            await auth?.signup(name,email,password);
            toast.success("Signed Up Successfully",{ id:"signup" });

        } catch (error) {
            console.log(error);
            toast.error("Signing Up Failed", {id:"signup"});
        }
    };

    return <Box width={"100%"} height={"100%" } display="flex" flex={1}>
        <Box padding={8} mt={8} display={{md:"flex", sm:"none", xs:"none"}}>
            <img src="airobot.png" alt="robot" style={{width :"400px"}}/>
         </Box>
        <Box display={"flex"} flex={{xs: 1, md:0.5}} justifyContent={"center"} alignItems={"center"} padding={2} marginLeft={"auto"} marginTop={16}>
            <form 
                onSubmit={handleSubmit}
                style={{margin:"auto",padding:"30px",boxShadow:"10px 10px 20px #000", borderRadius:"10px", border:"none",}}>
                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center",}}>
                    <Typography variant="h4" textAlign="center" padding={2} fontWeight={600}>
                        Signup
                    </Typography>
                    <CustomizedInput type="text" name="name" label="Name" />
                    <CustomizedInput type="email" name="email" label="Email" />
                    <CustomizedInput type="password" name="password" label="Password" />
                    <Button type="submit" sx={{ px:2,py:1,mt:2,width:"400px",borderRadius:2, bgolor:"#00fffc",":hover":{bgcolor:"white",color:"black"} }}
                    endIcon={<SlLogin />}>
                    Signup</Button>
                </Box>
            </form>
        </Box>
    </Box>;
};

export default Signup;
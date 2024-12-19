import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Box , Avatar , Typography, Button, IconButton} from "@mui/material";
import  red  from "@mui/material/colors/red";
import { useAuth } from "../context/AuthContext";
import ChatItem  from "../components/chat/ChatItem";
import  {IoMdSend} from "react-icons/io"; 
import { deleteUserChats, getUserChats, sendChatRequest } from "../helpers/api-communicator";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type Message = {
    role : "user" | "assistant";
    content : string;
};

const Chat = () => {
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement | null>(null)

    const auth = useAuth();
    const [chatMessages, setChatMessages ] = useState<Message[]>([]);
    const handleSubmit = async () => {
        const content = inputRef.current?.value as string;
        if(inputRef && inputRef.current){
            inputRef.current.value = "";
        }
        const newMessage: Message = {role:"user", content};
        setChatMessages((prev)=>[...prev,newMessage]);

        const chatData = await sendChatRequest(content);
        setChatMessages([...chatData.chats]);
    };

    const handleDeleteChats = async() =>{
      try {
        toast.loading("Deleting Chats",{id:"deletchats"});
        await deleteUserChats();
        setChatMessages([]);
        toast.success("Your Chats has been deleted",{id:"deletchats"});

      } catch (error) {
        console.log(error);
        toast.error("not deleted",{id:"deletchats"});
    }
};

    useLayoutEffect(() => {
        if(auth?.isLoggedIn && auth.user){
            toast.loading("Loading Chats",{id:"loadchats"});
            getUserChats().then((data)=>{
                setChatMessages([...data.chats]);
                toast.success("Successfully loaded chats",{id:"loadchats"});
            })
            .catch((err)=>{
                console.log(err);
                toast.error("Loading Failed", {id:"loadchats"});
                
        });
        }
    }, [auth]);

    useEffect(()=>{
        if(!auth?.user){
            return navigate("/login");
        }
    },[auth]);

    return (<Box sx = {{display:"flex", flex:1,width:"100%", height:"100%", mt:3 , gap:3, }}
    >
        <Box sx ={{display:{md:"flex", xs:"none", sm:"none"}, flex:0.2, flexDirection:"column" }} >
            <Box sx={{display:"flex", width:"100%",height:"72.5vh",flexDirection:"column", bgcolor:"rgb(48,56,65) ", borderRadius:5, mx:3}} >
                <Avatar sx={{mx:"auto", my: 2,  bgcolor:"white", color:"black",fontWeight:700}}> 
                { auth?.user?.name[0]}{auth?.user?.name.split("  ")[1]}
                </Avatar>
                <Typography sx={{mx:"auto", fontfamily:"fantasy", fontWeight:"bold"}}>
                    PHOENIX CHATBOT
                </Typography>
                <Typography sx={{ mx: "auto", fontFamily:"work sans", my:2, p:2,color:"smokewhite",fontWeight:"500" }}>
                The project utilizes MongoDB as a backend database for storing and retrieving data, ensuring scalability
                and flexibility for handling large datasets with proper Authentication Security.
                You can ask any questions but   
                Do not share personal information of any kind.   
                </Typography>
                <Button onClick={handleDeleteChats} sx={{width:"200px" , my:"auto", color:"white", fontWeight:"900", borderRadius:3 , mx:"auto", bgcolor: red[800], ":hover":{bgcolor:red.A400,}, }} >
                    clear Conversation
                </Button>
            </Box>
        </Box>
        <Box sx={{display:"flex", flex:{md:0.8,xs:1,sm:1}, flexDirection:"column",px:2}}> 
        
        <Box sx={{width:"100%", height:"60vh",borderRadius:3, mx:"auto",display:"flex",flexDirection:"column",overflow:"scroll",overflowX:"hidden",overflowY:"auto",scrollBehavior:"smooth"}} >
            {chatMessages.map((chat,index)=>(
                //@ts-ignore
                <ChatItem content={ chat.content} role={ chat.role} key={index} />
            ))}
        </Box>
        <div style={{width:"100%", padding:"15px",borderRadius:8, backgroundColor:"rgb(17,27,39)", display:"flex", margin:"auto"}}> {" "}
        <input ref={inputRef} type="text" style={{width:"100%" , backgroundColor:"transparent", padding:"5px",border:"none",outline:"none", color:"white", fontSize:"20px"}}/>   
          <IconButton onClick={handleSubmit} sx={{ml:"auto", color:"white"}} ><IoMdSend/></IconButton>
          </div>
        </Box>
    </Box>
  );
};

export { Chat };
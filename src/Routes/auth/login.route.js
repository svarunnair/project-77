const {Router} = require("express")
const { userModal } = require("../../Modals/auth/login.modal")
const loginController = Router()


const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


loginController.post('/',async(req,res)=>{
    const {email,password,name} = req.body
  
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid Email" });
    }
    
    if(!password||!name){
        return res.status(400).json({message:"All Fields are mandatory"})
    }
    try{
    const user = userModal({
        email:email,
        password:password,
        name:name
    })
    await user.save()
    return res.status(201).json({ message: "User created successfully." });
    }
    catch(err){
        console.log('err',err)
        return res.status(500).json({ message: "Server error." });
    }
})


loginController.get('/',async(req,res)=>{
     try {
       const data = await userModal.find(); 
       res.status(200).json(data); 
     } catch (err) {
       console.error("Error:", err);
       res.status(500).json({ message: "Server error" });
     }
})





module.exports = { loginController };
import { User } from "../models/user.js";
import { sendToken } from "../utils/features.js";



const newUser = async(req, res) => {
    const { name, username, password,bio} = req.body;
    const avatar={
        public_id:"asdasd",
        url:"koldf",
    }
  const user =  await User.create(
        {
            bio,
            name,
            username,
            password,
            avatar,

        }
    );
 sendToken(user,201,res," user created successfully");
};
const login = (req, res) => {
    res.send("hello world");
}
export { login, newUser };
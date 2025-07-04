const User = require("../Model/UserModel");

//data display
const getAllUsers = async (req, res, next) => {
    let users; // ✅ Fix variable name (was "Users")

    // Get all users
    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
    }

    // Not found
    if (!users) {
        return res.status(404).json({ message: "Users not found" });
    }

    // Display all users
    return res.status(200).json({ users });
};

//data insert
const addUser = async (req, res, next) => {


    const {name, gmail, age, address} = req.body;
     let user;

     try{
        user = new User({name, gmail, age, address});
        await user.save();
     }catch (err) {
        console.log(err);
     }
     //don't insert users
     if (!user){
        return res.status(404).json({message:"unable to add users"});
     }
     return res.status(200).json({user});
};

//Get by Id
const getById = async (req, res, next) => {
    const id = req.params.id;

    let user;

    try{
        user = await User.findById(id);
    }catch (err) {
        console.log(err);
    }
    //not available users
    if (!user){
        return res.status(404).json({message:"User Not Found"});
     }
     return res.status(200).json({user});
    }

    //Update user Details
    const updateUser = async (req, res, next) => {
        const id = req.params.id;
        const {name, gmail, age, address} = req.body;
    
        let user;
    
        try{
            user = await User.findByIdAndUpdate(id,{name:name, gmail: gmail, age: age, address: address });
            user = await user.save();
        }catch (err) {
            console.log(err);
        }
        //not available users
        if (!user){
            return res.status(404).json({message:"Unable to Update User Details"});
         }
         return res.status(200).json({user});
        };

        //Delete User Details
        const deleteUser = async (req, res, next) => {
            const id = req.params.id;
        
            let user;
        
            try{
                user = await User.findByIdAndDelete(id)
            }catch (err) {
                console.log(err);
            }
            //not available users
            if (!user){
                return res.status(404).json({message:"Unable to Delete User Details"});
             }
             return res.status(200).json({user});
            };
    

    


// Export
exports.getAllUsers = getAllUsers;
exports.addUser = addUser;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
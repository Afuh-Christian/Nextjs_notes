


 function verifyRoles( Handler , ...allowedRoles ){
    return async (req, res) => {
        const rolesallowed = [...allowedRoles]
        console.log(rolesallowed)
      
        const roles = Object.values(req.roles)
        console.log(roles)
       const result = roles.map(r => rolesallowed.includes(r)).find(v => v === true)

       if(!result)  return res.status(401).json("Not allowed")

        
        return Handler(req  , res)
    }
}


export default verifyRoles
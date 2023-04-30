// This is where I 



/**======================The user registration controller========================== */
// Sample  POST request that will be sent to the Server
/** POST: http://localhost:4000/api/register
 *  @param :{
    firstName :'',
    lastName : '',
    phone : '123-456-7890',
    email: 'username@email.com',
    username: 'username',
    Password : 'password123',
    profile: '',
    address: '123 Main st',
    City : 'yourCity',
    State : 'yourState',
    Zipcode : '12345'    
}
 */
export async function register(req, res){
    res.json('register route');
}
/**=========================The user login controller====================== */
// 
/**
 * @param : {
    username: 'username',
    Password : 'password123',
}
 */
export async function login(req, res){
    res.json('login route');
}


/** GET: http://localhost:4000/api/user/'username' this path router.route('/user/:username').get();*/
export async function getUser(req, res){
    res.json('getUser route');
}


/** PUT: http://localhost:4000/api/userUpdate this path router.route('/user/:username').get();*/
/**
 * @param : {
 *     id : '<userid>'
  } 
        body: {
            firstName: '',
            address: '',
            profile: ''
        }                                                                                                         
 */
export async function userUpdate(req, res){
    res.json('userUpdate route');
}
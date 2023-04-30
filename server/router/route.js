import { Router } from "express";
const router = Router();




/** POST Methods */
router.route('/register').post((req, res) => res.json('register route'));
router.route('/registerMail').post(); // to send the email
router.route('/authentication').post(); // authenticate user
router.route('/login').post(); // login in app

/** GET Methods */
router.route('/user/:username').get(); // user with username
router.route('/generateOneTimeCode').get(); //generating OneTimeCode
router.route('/verify/OneTimeCode').get(); // Verification of OneTimeCode
router.route('/Reset').get(); // resetting everything 

/** PUT Methods */
router.route('/userUpdate').put(); // updating user profile
router.route('/resetPassword').put(); // resetting the password

export default router;
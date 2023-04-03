import express from "express";

const router = express.Router();

const getDocuments = async ( req, res ) => {
	res.status( 200 ).send( [ "hi1", "hi2" ] );
};

router.get( "/", getDocuments );
export default router;

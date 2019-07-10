import { Request, Response } from 'express';

export const createUser = async (req: Request, res: Response) => {
	// req.body.user object with email, username, password and address
	// password is plain text
	console.log(req.body);
	res.send(req.body);
};

export const getUser = async (req: Request, res: Response) => {
	throw Error('TODO');
};

export const login = async (req: Request, res: Response) => {
	// req.body.email anf req.body.password
	// password is plain text
	console.log(req.body);
	res.send(req.body);
};

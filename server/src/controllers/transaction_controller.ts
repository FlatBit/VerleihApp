import { Request, Response } from 'express';

export const createTransaction = async (req: Request, res: Response) => {
	throw Error('TODO');
};

export const getTransactions = async (req: Request, res: Response) => {
	const trans = [
		{
			verleiherID: '123',
			ausleiherID: '321',
			startDate: '1.1.2019',
			endDate: '1.3.2019',
			status: 'pending',
			item: 'Rasenmäher'
		},
		{
			verleiherID: '321',
			ausleiherID: '123',
			startDate: '1.1.2019',
			endDate: '1.3.2019',
			status: 'pending',
			item: 'Golfschläger'
		},
		{
			verleiherID: '321',
			ausleiherID: '123',
			startDate: '1.1.2019',
			endDate: '1.3.2019',
			status: 'pending',
			item: 'Waschmaschine'
		}
	];
	res.json(trans);
};

export const changeTransStatus = async (req: Request, res: Response) => {
	// TODO status der transaktion ändern -> akzeptiert oder abgelehnt
	res.json(req.body);
};

/*
    _id?: string;
    verleiherID: string;
    ausleiherID: string;
    startDate: Date;
    endDate: Date;
    status: string;    // ["pending", "accepted", "declined"]
    review: {
        verleiherRating: number;
        ausleiherRating: number;
        verleiherComment: string;
        ausleiherComment: string;
    }
*/

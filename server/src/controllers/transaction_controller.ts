import { Request, Response } from 'express';

export const createTransaction = async (req: Request, res: Response) => {
	throw Error('TODO');
};

export const getTransactions = async (req: Request, res: Response) => {
	// alle transaktionen des akutellen users zurückgebben
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
	// status der transaktion ändern -> akzeptiert oder abgelehnt
	// req.body.status enthält neuen status der transaktion
	res.json(req.body);
};

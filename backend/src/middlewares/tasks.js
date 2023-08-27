const validateFieldTitle = (req, res, next) => {
	const { body } = req;
	if (body.title === undefined || body.title === '') {
		return res.status(400).json({ message: 'O campo "Título" é obrigatório' });
	}
	next();
};

const validateFieldStatus = (req, res, next) => {
	const { body } = req;
	if (body.status === undefined || body.status === '') {
		return res.status(400).json({ message: 'O campo "Status" é obrigatório' });
	}
	next();
};

module.exports = {
	validateFieldTitle,
	validateFieldStatus,
};
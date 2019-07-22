
exports.createPostValidator = (req, res, next) => {
    req.check('title', "Name of dish field can not empty").notEmpty(),
        req.check('title', "Name of dish must be between 4 to 150 characters").isLength({
            min: 4,
            max: 150
        });
    req.check('body', "Ingredient field can not empty").notEmpty(),
        req.check('body', "Ingredient must be between 4 to 2000 characters").isLength({
            min: 4,
            max: 2000
        });
    req.check('bodys', "Step of cook field can not empty").notEmpty(),
        req.check('bodys', "Step of cook must be between 4 to 2000 characters").isLength({
            min: 4,
            max: 2000
        });
    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
};
exports.userSignupValidator = (req, res, next) => {
    req.check('name', "This name field can not empty").notEmpty(),
        req.check('dob', "This date of birth field can not empty").notEmpty(),
        req.check('gender', "This gender can not empty").notEmpty(),
        req.check('email', "This email field can not empty").notEmpty(),
        req.check('email', "Email is invalid").matches(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)
            .withMessage("Email must contain @")
            .isLength({
                min: 4,
                max: 2000
            })
    req.check('password', "This password field can not empty").notEmpty(),
        req.check('password', "Password must contain at least 6 characters").isLength({ min: 4 })
            .matches(/\d/)
            .withMessage("Password must contain a number")

    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
}

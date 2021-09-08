let Account = require('../models/login.model')

Account.
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'content can not be empty'
        })
    }

    const account = new Account({
        username: req.body.username,
        password: req.body.password
    })

    Account.create(account, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || 'some error'
            })
        }
        else res.send(data)
    })
}

exports.findAll = (req, res) => {
    Account.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });

}

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'content can not be empty'
        })
    }
    Account.updateById(
        req.params.idAccount,
        new Account(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Customer with id ${req.params.idAccount}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Customer with id " + req.params.idAccount
                    });
                }
            }
            else res.send(data);
        }
    )

}
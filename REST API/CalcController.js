'use strict';

class CalcController {
    constructor(router) {
        this.router = router;
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.post('/add', this.add.bind(this));
        this.router.post('/divide', this.divide.bind(this));
        this.router.post('/multiply', this.multipy.bind(this));
        this.router.post('/compute', this.compute.bind(this));
    }

    add(num1, num2) {
        var result = num1 + num2;
        return(result);
    }

    divide(req, res) {
        var result = req.params.num1 / req.params.num2;
        res.send(result);
    }

    multipy(req, res) {
        var result = req.params.num1 * req.params.num2;
        res.send(result);
    }

    compute(req, res) {
        var result = req.params.num1 + req.params.num2;
        res.send(result);
    }
    
}

module.exports = CalcController;
const controller = {};

controller.list = (req, res) =>{
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer',(err, customers) => {
            if(err){
                res.json(err); //en caso de error
            }
            console.log(customers);
            res.render('customers',{
                data: customers
            })
        });
    });
};

controller.save = (req, res) =>{
    const data=req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO customer set ?',[data], (err, customer) => {
            //console.log(customer);
            res.redirect('/');
        });
    });

    //console.log(req.body);
    //res.send('works');
}

controller.save = (req, res) =>{
    const data=req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO customer set ?',[data], (err, customer) => {
            //console.log(customer);
            res.redirect('/');
        });
    });

    //console.log(req.body);
    //res.send('works');
}

module.exports = controller;
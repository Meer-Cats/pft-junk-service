const port = process.env.PORT || 4201;

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const router = express.Router();

router.get('/auth', (req, res) => {
    if (req.params.id === 'toto@mail.fr' && req.params.password === 'toto')
        res.json({user: 'toto', auth: true});
    else
        res.json({auth: false});
});

app.use('/junk-service', router);
app.listen(port, () => {
});

const service = require('../services/service');

module.exports =  {    
    findById: async (req, res) => {      
        let json = {
            error: '',
            result: {}
        }

        let id = req.params.id;
        
        let carro = await service.findById(id);        

        if (carro) {
            json.result = carro;
        }

        res.json(json);
    },

    findAll: async (req, res) => {        
        let json = {
            error: '',
            result: []
        }
        
        let carros = await service.findAll();
        
        for(let i in carros) {
            json.result.push({
                id: carros[i].id,
                modelo: carros[i].modelo,
                placa: carros[i].placa
            });
        }

        res.json(json);
    }
}
'use strict'

const Cars = use('App/Models/User')

class CarController {
    async index({ request, response }){
        const cars = await Cars.all()
        return response.send(cars)
    }

    async store({ request, response }){
        const data = request.only(['name','url'])
        const car = await Cars.create(data)

        return response.status(200).send({ msg: "Carro cadastrado com sucesso!" })
    }
}

module.exports = CarController

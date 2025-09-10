import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        { 
            id: 1,
            brand: 'Toyota',
            model: 'Corolla',
            year: 2020
        },
        { 
            id: 2, 
            brand: 'Honda',
            model: 'Civic',
            year: 2019
        },
        {
            id: 3,
            brand: 'Ford',
            model: 'Focus',
            year: 2018
        }
    ];

    findAll() {
        return this.cars;
    }

    findOne(id: number) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`Car with id ${id} not found`);
        return car;
    }

    create(car: any) {
        this.cars.push(car);
        return car;
    }

}

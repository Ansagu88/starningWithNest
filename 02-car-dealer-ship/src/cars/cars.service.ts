import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        { 
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla',
            year: 2020
        },
        { 
            id: uuid(), 
            brand: 'Honda',
            model: 'Civic',
            year: 2019
        },
        {
            id: uuid(),
            brand: 'Ford',
            model: 'Focus',
            year: 2018
        }
    ];

    findAll() {
        return this.cars;
    }

    findOne(id: string) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`Car with id ${id} not found`);
        return car;
    }

    create(createCarDto: CreateCarDto) {
        const newCar = { id: uuid(), ...createCarDto };
        this.cars.push(newCar);
        return newCar;
    }

    update(id: string, updateCarDto: UpdateCarDto) {
       let carDB = this.findOne(id);
       this.cars = this.cars.map(car => {
            if (car.id === id) {
                carDB = { ...carDB, ...updateCarDto, id };
                return carDB;
            }
            return car;
       });
       return carDB;
    }


    remove(id: string) {
        this.findOne(id);
        this.cars = this.cars.filter(car => car.id !== id);
    }
}

       
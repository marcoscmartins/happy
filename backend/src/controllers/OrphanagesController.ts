import {Request, Response} from 'express';
import {getRepository} from 'typeorm';

import Orphanage from '../models/Orphanage';
<<<<<<< HEAD
import orphanageView from '../views/orphanages_view';
=======
>>>>>>> 460f7bacc0d5999f6ac6c00986b5a619647559fe

export default {
    async index(request:Request, response:Response) {
        const orphanagesRepository = getRepository(Orphanage);
<<<<<<< HEAD
        const orphanages = await orphanagesRepository.find({
            relations: ['images']
        });

        return response.json(orphanageView.renderMany(orphanages));
=======
        const orphanages = await orphanagesRepository.find();

        return response.json(orphanages);
>>>>>>> 460f7bacc0d5999f6ac6c00986b5a619647559fe
    },
    async show(request:Request, response:Response) {

        const { id } = request.params;
        const orphanagesRepository = getRepository(Orphanage);
<<<<<<< HEAD
        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ['images']
        });

        return response.json(orphanageView.render(orphanage));
    },
    async create(request:Request, response:Response) {
        const {
=======
        const orphanage = await orphanagesRepository.findOneOrFail(id);

        return response.json(orphanage);
    },
    async create(request:Request, response:Response) {
        const {
            id,
>>>>>>> 460f7bacc0d5999f6ac6c00986b5a619647559fe
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
        } = request.body;
        
        const orphanagesRepository = getRepository(Orphanage);
<<<<<<< HEAD
        
        // hack para ligar com upload de múltiplos arquivos
        const requestImages = request.files as Express.Multer.File[];
        const images = requestImages.map(image => {
            return {path: image.filename};
        })

        const orphanage = orphanagesRepository.create({
=======
    
        const orphanage = orphanagesRepository.create({
            id,
>>>>>>> 460f7bacc0d5999f6ac6c00986b5a619647559fe
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
<<<<<<< HEAD
            open_on_weekends,
            images
=======
            open_on_weekends
>>>>>>> 460f7bacc0d5999f6ac6c00986b5a619647559fe
        });
    
        await orphanagesRepository.save(orphanage);
    
        return response.status(201).json(orphanage);
    }
}
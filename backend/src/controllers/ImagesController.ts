import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Images from '../models/Image';

export default {
    async index(request:Request, response:Response) {
        const imagesRepository = getRepository(Images);
    },
    async show(request:Request, response:Response) {

    },
    async create(request:Request, response:Response) {
        
    }
}
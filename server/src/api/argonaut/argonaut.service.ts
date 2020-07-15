import {InjectRepository} from '@nestjs/typeorm';
import {Injectable} from '@nestjs/common';
import {Argonaut} from './argonaut.entity';
import {Repository} from 'typeorm';

@Injectable()
export class ArgonautService {

    constructor(@InjectRepository(Argonaut) private repository: Repository<Argonaut>) {
    }

    async findAll(): Promise<Argonaut[]> {
        try {
            return await this.repository.find({order: {id: 'DESC'}});
        } catch (e) {
            throw new Error(e);
        }
    }

    async create(name: string): Promise<Argonaut> {
        try {
            const model = new Argonaut({name});
            return await this.repository.save(model);
        } catch (e) {
            throw new Error(e);
        }
    }

    async updateOneById(id: number, name: string): Promise<Argonaut> {
        try {
            await this.repository.save({id, name});
            return await this.repository.findOne(id);
        } catch (e) {
            throw new Error(e);
        }
    }
    
    async deleteOneById(id: number): Promise<boolean> {
        try {
            return !!await this.repository.delete(id);
        } catch (e) {
            throw new Error(e);
        }
    }

    async clear(): Promise<boolean> {
        try {
            await this.repository.clear();
            return true;
        } catch (e) {
            throw new Error(e);
        }
    }
}

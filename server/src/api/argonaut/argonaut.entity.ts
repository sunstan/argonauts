import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
@Entity({name: 'argnonauts'})
export class Argonaut {
    
    @Field()
    @PrimaryGeneratedColumn()
    id: number;
    
    @Field()
    @Column()
    name: string;
    
    constructor(item?: Partial<Argonaut>) {
        Object.assign(this, item);
    }
}

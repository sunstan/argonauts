import {Argonaut} from './argonaut.entity';
import {ArgonautService} from './argonaut.service';
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {BadRequestException} from '@nestjs/common';

@Resolver(of => Argonaut)
export class ArgonautResolver {
    
    constructor(
        private argonautService: ArgonautService,
    ) {
    }
    
    @Query(returns => [Argonaut])
    async argonauts(): Promise<Argonaut[]> {
        return await this.argonautService.findAll();
    }
    
    @Mutation(returns => Argonaut)
    async addArgonaut(@Args('name') name: string): Promise<Argonaut> {
        if (!name) throw new BadRequestException('Name Is Required');
        return  await this.argonautService.create(name);
    }
    
    @Mutation(returns => Argonaut)
    async updateArgonaut(
        @Args('id') id: number,
        @Args('name') name: string): Promise<Argonaut> {
        if (!id) throw new BadRequestException('Id Is Required');
        return await this.argonautService.updateOneById(id, name);
    }
    
    @Mutation(returns => Boolean)
    async deleteArgonaut(@Args('id') id: number): Promise<boolean> {
        if (!id) throw new BadRequestException('Id Is Required');
        return await this.argonautService.deleteOneById(id);
    }
    
    @Mutation(returns => Boolean)
    async clearArgonauts(): Promise<boolean> {
        return await this.argonautService.clear();
    }
}

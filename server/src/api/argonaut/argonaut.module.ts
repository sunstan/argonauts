import {Module} from '@nestjs/common';
import {Argonaut} from './argonaut.entity';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ArgonautService} from './argonaut.service';
import {ArgonautResolver} from './argonaut.resolver';

@Module({
    imports: [
        TypeOrmModule.forFeature([Argonaut]),
    ],
    providers: [
        ArgonautService,
        ArgonautResolver,
    ],
})
export class ArgonautModule {}

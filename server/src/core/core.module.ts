import {Module} from '@nestjs/common';
import {DatabaseModule} from './database/database.module';
import {GqlModule} from './gql/gql.module';

@Module({
    imports: [
        GqlModule,
        DatabaseModule,
    ],
})
export class CoreModule {
}

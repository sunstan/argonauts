import {Module} from '@nestjs/common';
import {ArgonautModule} from './argonaut/argonaut.module';

@Module({
    imports: [
        ArgonautModule,
    ],
})
export class ApiModule {
}

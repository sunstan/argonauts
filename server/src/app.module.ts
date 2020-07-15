import {Module} from '@nestjs/common';
import {join} from "path";
import {ApiModule} from './api/api.module';
import {CoreModule} from './core/core.module';
import {ConfigModule} from '@nestjs/config';
import {ServeStaticModule} from '@nestjs/serve-static';

@Module({
    imports: [
        ApiModule,
        CoreModule,
        ConfigModule.forRoot({isGlobal: true}),
        ServeStaticModule.forRoot({rootPath: join(__dirname, '..', 'client')}),
    ],
})
export class AppModule {}

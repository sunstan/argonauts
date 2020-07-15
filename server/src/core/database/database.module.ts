import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ConfigService} from '@nestjs/config';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({

                type: 'mysql',
                synchronize: true,
                entities: ['dist/**/*.entity{.ts,.js}'],

                host: config.get<string>('DATABASE_HOST') || '',
                port: parseInt(config.get<string>('DATABASE_PORT'), 10) || 3306,

                username: config.get<string>('DATABASE_USERNAME') || '',
                password: config.get<string>('DATABASE_PASSWORD') || '',
                database: config.get<string>('DATABASE_DATABASE') || '',

                ssl: config.get<string>('NODE_ENV') === 'production',
                extra: config.get<string>('NODE_ENV') === 'production'
                    ? { ssl: { rejectUnauthorized: false } }
                    : null
            })
        }),
    ]
})
export class DatabaseModule {
}

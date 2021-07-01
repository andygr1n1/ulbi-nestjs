import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller'
import { AppService } from './app.service';

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'grini',
            database: 'ulbi_nestjs',
            models: [],
            autoLoadModels: true,
        }),
    ],
})
export class AppModule {}

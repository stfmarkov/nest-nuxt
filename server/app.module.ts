import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { NuxtModule } from './nuxt/nuxt.module';
import { AppService } from './app.service';

@Module({
    imports: [
        NuxtModule // should be last
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }

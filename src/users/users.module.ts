import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UsersController],
    controllers: [UsersController],
    exports: [UsersController]
})
export class UsersModule { }

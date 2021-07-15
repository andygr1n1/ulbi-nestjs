import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { UsersController } from './users.controller'
import { User } from './users.model'
import { UsersService } from './users.service'
import { Role } from '../roles/roles.model';
import { UserRoles } from 'src/roles/user_roles.model'

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [SequelizeModule.forFeature([User, Role, UserRoles])],
})
export class UsersModule {}

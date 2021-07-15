import { Module } from '@nestjs/common';
import { RoleService } from './roles.service'
import { RolesController } from './roles.controller';
import { Role } from './roles.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { UserRoles } from './user_roles.model';

@Module({
    providers: [RoleService],
    controllers: [RolesController],
    imports: [SequelizeModule.forFeature([Role, User, UserRoles])],
})
export class RolesModule {}

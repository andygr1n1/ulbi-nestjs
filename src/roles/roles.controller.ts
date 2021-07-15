import { Body, Controller, Post, Get, Param } from '@nestjs/common'
import { RoleService } from './roles.service';
import { CreateRoleDto } from './dto/create_role.dto';

@Controller('roles')
export class RolesController {
    constructor(private roleService: RoleService) {}

    @Post()
    create(@Body() dto: CreateRoleDto) {
        return this.roleService.createRole(dto)
    }

    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.roleService.getRoleByValue(value)
    }
}

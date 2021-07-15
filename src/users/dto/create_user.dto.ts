import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {
    @ApiProperty({ example: 'andy.grini@gmail.com', description: 'Email' })
    readonly email: string
    
    @ApiProperty({ example: 'hercules', description: 'Password' })
    readonly password: string
}
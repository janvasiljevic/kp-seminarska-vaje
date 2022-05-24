import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ description: 'User email', example: 'admin01@kpbookstore.kp' })
  email: string;

  @ApiProperty({ description: 'User password', example: '12345678' })
  password: string;
}

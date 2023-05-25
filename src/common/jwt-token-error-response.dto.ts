import { ApiProperty } from '@nestjs/swagger';

export class JwtTokenErrorResponseDto {
  @ApiProperty({ example: '401' })
  statusCode: number;

  @ApiProperty({ example: 'Unauthorized' })
  message: number;
}

import { ApiProperty } from '@nestjs/swagger';

export class MessageResponseDto {
  @ApiProperty({ example: 'Hola Juan Perez, su mensaje será enviado' })
  message: string;
}

// api-key-error-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class ApiKeyErrorResponseDto {
  @ApiProperty({ example: 'Invalid API key' })
  message: string;
}

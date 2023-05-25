import { ApiProperty } from '@nestjs/swagger';

export class TokenResponseDto {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFub255bW91cyIsInN1YiI6MSwiaWF0IjoxNjg1MDQzMjI3LCJleHAiOjE2ODUwNDM4Mjd9.dukp4V3Pv4ZMpf-sBR7TNJRDJS72o0Vg-v_vfODDRM4',
  })
  access_token: string;
}

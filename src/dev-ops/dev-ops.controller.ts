import { Body, Controller, Headers, Post } from '@nestjs/common';

@Controller('dev-ops')
export class DevOpsController {
  @Post('/DevOps')
  sendMessage(@Body() payload, @Headers('X-Parse-REST-API') apiKey): any {
    if (apiKey !== '2f5ae96c-b558-4c7b-a590-a501ae1c3f6c') {
      return 'ERROR';
    }
    const { message, to } = payload;
    return {
      message: `Hola ${to} su mensaje será enviado`,
    };
  }
}

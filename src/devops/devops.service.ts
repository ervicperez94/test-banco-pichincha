import { Injectable } from '@nestjs/common';

@Injectable()
export class DevopsService {
  async send(data: any): Promise<any> {
    const { to } = data;

    return {
      message: `Hola ${to}, su mensaje será enviado`,
    };
  }
}

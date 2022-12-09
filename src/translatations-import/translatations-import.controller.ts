import { Controller, Get } from '@nestjs/common';
import { TranslatationsImportService } from './translatations-import.service';

@Controller('translatations-import')
export class TranslatationsImportController {
     constructor(private readonly translatationsImportService: TranslatationsImportService) {}
    @Get()
   async findTranslation() {
        const result =await this.translatationsImportService.getTranslation()
        console.log((result))
    }

}

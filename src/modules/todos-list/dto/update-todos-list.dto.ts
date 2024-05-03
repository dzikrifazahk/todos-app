import { ApiProperty } from "@nestjs/swagger";

export class UpdateTodosListStatusDto {
    @ApiProperty({
        type: Boolean,
        required: true,
        example: 'true'        
    })
    status: boolean;
}

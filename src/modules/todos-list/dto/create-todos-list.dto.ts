import { ApiProperty } from "@nestjs/swagger";

export class CreateTodosListDto {
    @ApiProperty({
        type: String,
        required: true,
        example: 'Nge Gym Pukul 16.00'
    })
    todo: string;

    @ApiProperty({
        type: String,
        required: false,
        example: 'Jangan lupa bawa handuk'
    })
    description: string;

}
